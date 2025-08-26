import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';

// RecruiterChat Component
export default function RecruiterChat({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [userId, setUserId] = useState(null);
  const [db, setDb] = useState(null);
  const [conversationId, setConversationId] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  // Initialize Firebase and set up auth state listener
  useEffect(() => {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBSMW88f_BeyPnA1-9wGms1RfwUp50aLQw",
      authDomain: "my-portfolio-chat-371a9.firebaseapp.com",
      projectId: "my-portfolio-chat-371a9",
      storageBucket: "my-portfolio-chat-371a9.firebasestorage.app",
      messagingSenderId: "501876500671",
      appId: "1:501876500671:web:a9b5d652913a9c3cf6be0a"
    };

    try {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      setDb(getFirestore(app));

      const signIn = async () => {
        try {
          // Since this is a public chat, we'll sign in anonymously
          await signInAnonymously(auth);
        } catch (e) {
          console.error('Firebase Auth error:', e);
        }
      };
      signIn();

      // Listen for auth state changes
      const unsubscribeAuth = auth.onAuthStateChanged(user => {
        if (user) {
          setUserId(user.uid);
          setIsAuthReady(true);
          // Use the user's UID to create a unique conversation ID
          setConversationId(user.uid);
        } else {
          setIsAuthReady(true);
        }
      });

      return () => unsubscribeAuth();
    } catch (e) {
      console.error('Firebase initialization error:', e);
    }
  }, []);

  // Listen for real-time messages when authenticated and conversation ID is set
  useEffect(() => {
    if (!db || !userId || !isAuthReady) return;

    // The unique app ID for this canvas environment. You can use your project ID.
    const uniqueAppId = "my-portfolio-chat-371a9";
    
    // Define the Firestore collection path for this public chat
    const chatCollectionRef = collection(db, 'artifacts', uniqueAppId, 'public', 'data', 'conversations');

    const q = query(chatCollectionRef, orderBy('timestamp'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData = [];
      querySnapshot.forEach((doc) => {
        messagesData.push({ id: doc.id, ...doc.data() });
      });
      // Filter for messages belonging to the current conversation
      const filteredMessages = messagesData.filter(msg => msg.conversationId === conversationId);
      setMessages(filteredMessages);
    });

    return () => unsubscribe();
  }, [db, userId, conversationId, isAuthReady]);

  // Handle sending a new message
  const handleSendMessage = async () => {
    if (newMessage.trim() === '' || !db || !userId) {
      return;
    }

    // The unique app ID for this canvas environment.
    const uniqueAppId = "my-portfolio-chat-371a9";

    try {
      await addDoc(collection(db, 'artifacts', uniqueAppId, 'public', 'data', 'conversations'), {
        text: newMessage,
        senderId: userId,
        conversationId: conversationId,
        timestamp: serverTimestamp(),
      });
      setNewMessage('');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // Helper function to format the timestamp
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '...';
    const date = timestamp.toDate();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  if (!isAuthReady) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="text-center text-gray-600">
          <p>Initializing...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 flex flex-col h-[80vh] sm:h-[70vh]">
        
        {/* Header and User ID display */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Recruiter Q&A</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
          </button>
        </div>
        
        {/* Message area */}
        <div className="flex-1 overflow-y-auto my-4 space-y-4 pr-2">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 italic mt-10">
              Ask me a question!
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.senderId === userId ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-xl shadow-sm ${
                    msg.senderId === userId
                      ? 'bg-blue-500 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <div className={`flex text-xs mt-1 ${msg.senderId === userId ? 'text-blue-200 justify-end' : 'text-gray-500 justify-start'}`}>
                    {formatTimestamp(msg.timestamp)}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* Input area */}
        <div className="pt-4 border-t border-gray-200 flex items-center gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your question..."
            className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
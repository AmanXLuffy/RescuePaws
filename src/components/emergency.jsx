import React from 'react';

const Emergency = () => {
  return (
    <div className="w-full border-2 border-black flex items-center justify-center py-6 px-4 sm:px-6">
      <div className="w-full max-w-3xl border-2 rounded-lg border-black p-6 sm:p-8 bg-white shadow-md">
        <div className="text-2xl sm:text-3xl border-b-2 border-gray-400 font-semibold w-full h-12 flex items-center justify-center mb-4">
          <p>Emergency Assistance</p>
        </div>

        <p className="mb-4 text-base sm:text-lg leading-relaxed">
          If you witness an injured or distressed animal and need immediate help, you can join our dedicated WhatsApp Emergency Rescuers Group. This group connects you directly with our network of local rescuers who are actively available to respond.
        </p>

        <div className="mt-4">
          <p className="font-semibold mb-2">🟢 How it works:</p>
          <ul className="list-disc ml-6 space-y-1 text-sm sm:text-base">
            <li>Click the link below to join the group.</li>
            <li>Share details of the emergency, including the location, photos/videos, and a brief description of the animal's condition.</li>
            <li>Available rescuers in your area will respond as quickly as possible.</li>
          </ul>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chat.whatsapp.com/DqyiE0ev0G9Fj7cQaEJBG0"
            className="text-blue-600 underline inline-block mt-4"
          >
            📱 Join the WhatsApp Emergency Group
          </a>

          <div className="mt-6 text-sm sm:text-base leading-relaxed">
            <p>
              This group is for emergency animal rescue requests only. Please avoid unrelated messages to help rescuers stay focused and responsive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;

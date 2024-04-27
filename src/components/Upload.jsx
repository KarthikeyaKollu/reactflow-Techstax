import React from 'react'
// import {Auth} from "./Auth"
import { useUser } from '@clerk/clerk-react';

export const Upload = () => {
  const { isSignedIn, user, isLoaded } = useUser();
    async function uploadFileAndWorkflow() {
        try {
          console.log("Contacting server ...");
    
          const fileInput = document.getElementById('fileInput');
          const file = fileInput.files[0];
    
          if (!file) {
            console.error('No file selected.');
            return;
          }
    
          const formData = new FormData();
          formData.append('file', file);
          formData.append('workflowTypes', workflowArray);
    
          const response = await fetch('http://localhost:3000/upload-workflow', {
            method: 'POST',
            body: formData
          });
    
          if (!response.ok) {
            throw new Error('File upload and workflow data sending failed');
          }
    
          console.log('File uploaded and workflow data sent successfully.');
    
        } catch (error) {
          console.error('Error:', error.message);
        }
      }

      const saveToDatabase = () => {
        console.log(edges);
        console.log(nodes);
        writeData(`${user.id}/nodes`, nodes);
        writeData(`${user.id}/edges`, edges);
    
    
      }

  return (
    <div className='flex flex-col space-y-3'>
    <div className=''><input type="file" id="fileInput"/></div>
    <div className='border border-black w-[6%] pl-1 rounded-md shadow-lg'><button onClick={uploadFileAndWorkflow}>Upload</button></div>
    <div className='border border-black w-[6%] pl-3 rounded-md shadow-lg'><button onClick={saveToDatabase}>
      Save
    </button>
    </div>
    </div>
  )
}

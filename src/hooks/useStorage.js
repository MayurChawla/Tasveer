import {useState, useEffect} from 'react';
import {projectStorage} from '../firebase/firebaseconfig';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=> {
        //Refrence to save file (in project storage) and that the file should have this file.name inside the default bucket
        const storageRef = projectStorage.ref(file.name);
        
        //asynchronous method to upload the file to the above reference(projectStorage.ref)
        //this state change can happen 5 or 6 times during upload 
        storageRef.put(file).on('state_changed', (snap)=>{
            let percentage = (snap.bytesTransferred/ snap.totalBytes)*100;
            setProgress(percentage);    //setting progress
        }, (err)=>{
            setError(err);              //gonna trigger when there is some error with the upload
        }, async ()=>{
            const urls = await storageRef.getDownloadURL();//This is gonna fire when the upload is fully complete // we are gonna mark this function async because we are going to use await inside this function 
            setUrl(urls);
        })
    }, [file]);

    return {progress, url, error};
}

export default useStorage;
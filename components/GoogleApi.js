import { useState, useEffect } from 'react';
import { Button } from 'antd';

// const SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';
// const SCOPE = 'https://www.googleapis.com/auth/drive'; // Total control
const SCOPE = 'https://www.googleapis.com/auth/drive.file'; // Just app created files/folders

const GoogleAPI = () => {
    const [GoogleAuth, setGoogleAuth] = useState(null);
    const [signedIn, setSignedIn] = useState(false);

    function listFiles() {
        return window.gapi.client.drive.files.list({
            // q: '1oAYMyZxBHeznuQjm9txZ2Fq9jjb1atdu+in+parents',
            q: `'1oAYMyZxBHeznuQjm9txZ2Fq9jjb1atdu' in parents`
        })
            .then((response) => {
                // Handle the results here (response.result has the parsed body).
                console.log('Response', response);
            }, (err) => { console.error('Execute error', err); });
    }

    function createDirectory() {
        const fileMetadata = {
            name: 'markdown-editor',
            mimeType: 'application/vnd.google-apps.folder',
        };
        window.gapi.client.drive.files.create({
            resource: fileMetadata,
        }).then((response) => {
            switch (response.status) {
            case 200:
                console.log('Created Folder Id: ', response.result.id);
                break;
            default:
                console.log(`Error creating the folder, ${response}`);
                break;
            }
        });
    }

    function createFile() {
        const fileMetadata = {
            name: 'anotherfile',
            mimeType: 'text/markdown',
            parents: ['1oAYMyZxBHeznuQjm9txZ2Fq9jjb1atdu'], // markdown-editor folder ID
        };
        window.gapi.client.drive.files.create({
            resource: fileMetadata,
        }).then((response) => {
            switch (response.status) {
            case 200:
                console.log('Created file Id: ', response.result.id);
                break;
            default:
                console.log(`Error creating the file, ${response}`);
                break;
            }
        });
    }

    function setSigninStatus() {
        const user = GoogleAuth.currentUser.get();
        const isAuthorized = user.hasGrantedScopes(SCOPE);
        setSignedIn(isAuthorized);
        if (isAuthorized) {
            console.log('auth is true, making request');
            listFiles();
        }
    }

    function handleAuthClick() {
        if (GoogleAuth.isSignedIn.get()) {
            GoogleAuth.signOut().then(setSigninStatus);
        } else {
            GoogleAuth.signIn().then(setSigninStatus);
        }
    }

    function initClient() {
        const discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
        window.gapi.client.init({
            clientId: '707722307792-hummtvqukmi42ethaqkkead945rql4dk.apps.googleusercontent.com',
            discoveryDocs: [discoveryUrl],
            scope: SCOPE,
        }).then(() => {
            const g = window.gapi.auth2.getAuthInstance();
            setGoogleAuth(g);
            const user = g.currentUser.get();
            const isAuthorized = user.hasGrantedScopes(SCOPE);
            setSignedIn(isAuthorized);
        });
    }

    useEffect(() => {
        // Custom hook to add the client script
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/client.js';
        script.async = true;
        script.onload = () => {
            window.gapi.load('client:auth2', initClient);
        };
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <Button type="primary" onClick={handleAuthClick}>{(signedIn) ? 'Sign out' : 'Sign in'}</Button>
            {/* <Button type="primary" onClick={createDirectory}>Create directory</Button> */}
            <Button type="primary" onClick={createFile}>Create file in directory</Button>
        </div>
    );
};


export default GoogleAPI;

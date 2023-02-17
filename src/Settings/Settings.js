import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { tgc } from '../App';
import { settings } from '../Helper/BaseData';
import { eventHandler } from '../Helper/Helper';
import Section from '../UIComponents/Section/Section';
import Switch from '../UIComponents/Switch/Switch';
import styles from './Settings.style';

const Settings = () => {
    // states
    const [switches, setSwitches] = useState(settings);

    // context
    const { loader } = useContext(tgc);

    // upload handler
    const onUpload = () => {
        console.log("uploading...")
        eventHandler('click', document.querySelector("[class*='file-upload']"))
    };

    useEffect(() => {
        const file = document.querySelector("[class*='file-upload']");
        file.addEventListener('change', (e) => {
            // Get the selected file
            const file = e.target.files;
            console.log(file)
            // Get the file name and size
            const { name: fileName, size } = file;
            // Convert size in bytes to kilo bytes
            const fileSize = (size / 1000).toFixed(2);
            // Set the text content
            const fileNameAndSize = `${fileName} - ${fileSize}KB`;
            eventHandler('click', document.querySelector('[class*=file-upload-submit]'));
            e.preventDefault();
        });
    }, []);

    const formSubmit = () => {
        
    }

    return (
        <Section loader={loader}>
            <styles.SettingsWrapper>
                <styles.SettingsTitle>
                    Settings
                </styles.SettingsTitle>
                <styles.SettingsSectionsWrapper>
                <styles.SettingsSwitchesWrapper>
                {
                    switches.map((s, i) => {
                        return (
                            <Switch switchText={s.setting} />
                            )
                        })
                    }
                </styles.SettingsSwitchesWrapper>
                <styles.SettingsSectionsDivider />
                <styles.SettingsProfileWrapper>
                    <styles.ProfilePictureUploadWrapper>
                        <styles.ProfilePicture />
                        <form method={'post'} onSubmit={formSubmit} action={''} encType="multipart/form-data">
                            <button 
                                style={
                                    { 
                                        color: "#fff", 
                                        backgroundColor: "#607d8b", 
                                        border: "0", 
                                        borderRadius: "5px", 
                                        padding: "12px",
                                        cursor: "pointer",
                                        textAlign: "center",
                                        marginLeft: "15px"
                                    }
                                } 
                                className={'upload_profile_pic_button'} 
                                onClick={onUpload} 
                                type={'button'}
                            >
                                Upload Picture
                            </button>
                            <input type="hidden" id="Key" name="user" value={JSON.parse(localStorage.getItem('user')).id} />
                            <input style={{ visibility: "hidden", display: "block" }} name="fileToUpload" id="fileToUpload" className={'file-upload'} type={'file'} />
                            <input style={{ visibility: "hidden", display: "block" }} className={'file-upload-submit'} type={'submit'} name="submit" />
                        </form>
                    </styles.ProfilePictureUploadWrapper>
                </styles.SettingsProfileWrapper>
                </styles.SettingsSectionsWrapper>
            </styles.SettingsWrapper>
        </Section>
    );
};

export default Settings;
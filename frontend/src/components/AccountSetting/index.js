import React, { useState } from 'react';
import { editUser } from '../../Api/Common';
import { getUser } from '../../Api/Common';
import {
    OuterInner, SectionSetting, SettingCenter, SettingMenu, SettingLinkActive,
    IconUser, TextH2, SettingLink, SettingContainer, SettingItem, SettingForm, SettingHead,
    SettingTitleH2, ButtonStroke, SetttingList, SettingSection, SettingCategory, SettingRow,
    Field, FieldLabel, FiedlWrap, FieldInput, SetttingControl, ButtonSetting, SettingFieldSet,
    FieldTextarea, FieldText, FieldFacebook
} from './AccountSettingElements'
function Tab() {
    const [message, setMessage] = useState(null);
    const [user, setUser] = useState(getUser());
    const [form, setForm] = useState({ id:user.id, name: user.name, email: user.email, phone: user.phone, bio: user.bio, address: user.address, zalo: user.zalo, facebook: user.facebook, image : user.image });
    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(form);
        const response = await editUser(user.id, form);
        if (response.status == 200) {
            setMessage('Change success')
        } else {
            setMessage('Got some error')
        }
    }
    const changeImage = (event) =>{
        var file = event.target.files[0];
        setForm({...form, ["image"] : file});
    }
    return (
        <>
            <OuterInner>
                <SectionSetting>
                    <SettingCenter>
                        <SettingMenu>
                            <SettingLinkActive onClick={() => toggleTab(1)}>
                                <IconUser />
                                <TextH2>Personal info</TextH2>
                            </SettingLinkActive>
                            <SettingLink onClick={() => toggleTab(2)}>
                                <IconUser />
                                <TextH2>Login and security</TextH2>
                            </SettingLink>
                            <SettingLink onClick={() => toggleTab(3)}>
                                <IconUser />
                                <TextH2>Payments</TextH2>
                            </SettingLink>
                            <SettingLink onClick={() => toggleTab(4)}>
                                <IconUser />
                                <TextH2>Notification</TextH2>
                            </SettingLink>
                        </SettingMenu>
                        <SettingContainer>
                            <SettingItem>
                                <SettingForm>
                                    <SettingHead>
                                        <SettingTitleH2>Personal Info</SettingTitleH2>
                                        <ButtonStroke href="/profile">View Profile</ButtonStroke>
                                    </SettingHead>

                                    <SetttingList>
                                        <SettingSection>
                                            <SettingCategory>Account Info</SettingCategory>
                                            <SettingFieldSet>
                                                <SettingRow>
                                                    <Field>
                                                        <FieldLabel name='name' >User Name</FieldLabel>
                                                        <FiedlWrap>
                                                            <FieldInput value={form.name} name='name' onChange={handleInputChange} />
                                                        </FiedlWrap>
                                                    </Field>
                                                </SettingRow>
                                                <SettingRow>
                                                    <Field>
                                                        <FieldLabel>PHONE</FieldLabel>
                                                        <FiedlWrap>
                                                            <FieldInput name='phone' type='text' onChange={handleInputChange} value={form.phone} />
                                                        </FiedlWrap>
                                                    </Field>
                                                    <Field>
                                                        <FieldLabel>EMAIL</FieldLabel>
                                                        <FiedlWrap>
                                                            <FieldInput name='email' value={form.email} disabled />
                                                        </FiedlWrap>
                                                    </Field>
                                                </SettingRow>
                                                <FieldText>
                                                    <FieldLabel>BIO</FieldLabel>
                                                    <FiedlWrap>
                                                        <FieldTextarea name='bio' onChange={handleInputChange} value={form.bio}></FieldTextarea>
                                                    </FiedlWrap>
                                                </FieldText>
                                                <SettingRow>
                                                    <Field>
                                                        <FieldLabel>LIVES IN</FieldLabel>
                                                        <FiedlWrap>
                                                            <FieldInput name='address' onChange={handleInputChange} value={form.address} />
                                                        </FiedlWrap>
                                                    </Field>
                                                    <Field>
                                                        <FieldLabel>ZALO</FieldLabel>
                                                        <FiedlWrap>
                                                            <FieldInput name='zalo' onChange={handleInputChange} value={form.zalo} />
                                                        </FiedlWrap>
                                                    </Field>
                                                </SettingRow>
                                            </SettingFieldSet>
                                        </SettingSection>
                                        <SettingSection>
                                            <FieldFacebook>
                                                <FieldLabel>FACEBOOK</FieldLabel>
                                                <FiedlWrap>
                                                    <FieldInput name='facebook' onChange={handleInputChange} value={form.facebook} />
                                                </FiedlWrap>
                                            </FieldFacebook>

                                        </SettingSection>
                                        <Field>
                                            <FieldLabel>Avatar</FieldLabel>
                                            <FiedlWrap>
                                                <FieldInput type='file' name='image' onChange={changeImage} />
                                            </FiedlWrap>
                                        </Field>
                                    </SetttingList>
                                    <p>{(message) ? message : ""}</p>
                                    <SetttingControl>

                                        <ButtonSetting onClick={handleSubmit}>
                                            Update Profile
                                        </ButtonSetting>
                                    </SetttingControl>
                                </SettingForm>
                            </SettingItem>
                        </SettingContainer>
                    </SettingCenter>
                </SectionSetting>
            </OuterInner>
        </>
    )
}

export default Tab

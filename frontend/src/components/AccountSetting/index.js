import React from 'react';
import {useState} from 'react';
import {OuterInner, SectionSetting, SettingCenter, SettingMenu, SettingLinkActive,
    IconUser, TextH2, SettingLink, SettingContainer, SettingItem, SettingForm, SettingHead,
    SettingTitleH2, ButtonStroke, SetttingList, SettingSection, SettingCategory, SettingRow,
    Field, FieldLabel, FiedlWrap, FieldInput, SetttingControl, ButtonSetting,SettingFieldSet,
    FieldTextarea, FieldText, FieldFacebook
} from './AccountSettingElements'
function Tab () {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
          <>
            <OuterInner>
                <SectionSetting>
                    <SettingCenter>
                        <SettingMenu>
                            <SettingLinkActive onClick={() =>toggleTab(1)}>
                                <IconUser />
                                <TextH2>Personal info</TextH2>
                            </SettingLinkActive>
                            <SettingLink onClick={() =>toggleTab(2)}>
                                <IconUser />
                                <TextH2>Login and security</TextH2>
                            </SettingLink>
                            <SettingLink onClick={() =>toggleTab(3)}>
                                <IconUser />
                                <TextH2>Payments</TextH2>
                            </SettingLink>
                            <SettingLink onClick={() =>toggleTab(4)}>
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
                                                        <FieldLabel>Display Name</FieldLabel>
                                                        <FiedlWrap>
                                                            <FieldInput />
                                                        </FiedlWrap>
                                                    </Field>
                                                    <Field>
                                                        <FieldLabel>Real name</FieldLabel>
                                                        <FiedlWrap>
                                                            <FieldInput />
                                                        </FiedlWrap>
                                                    </Field>
                                                </SettingRow>
                                                <SettingRow>
                                                    <Field>
                                                        <FieldLabel>PHONE</FieldLabel>
                                                        <FiedlWrap>
                                                            <FieldInput />
                                                        </FiedlWrap>
                                                    </Field>
                                                    <Field>
                                                        <FieldLabel>EMAIL</FieldLabel>
                                                        <FiedlWrap>
                                                            <FieldInput />
                                                        </FiedlWrap>
                                                    </Field>
                                                </SettingRow>
                                                <FieldText>
                                                        <FieldLabel>BIO</FieldLabel>
                                                        <FiedlWrap>
                                                            <FieldTextarea></FieldTextarea>
                                                        </FiedlWrap>
                                                </FieldText>
                                                <SettingRow>
                                                    <Field>
                                                        <FieldLabel>LIVES IN</FieldLabel>
                                                        <FiedlWrap>
                                                            <FieldInput />
                                                        </FiedlWrap>
                                                    </Field>
                                                    <Field>
                                                        <FieldLabel>ZALO</FieldLabel>
                                                        <FiedlWrap>
                                                            <FieldInput />
                                                        </FiedlWrap>
                                                    </Field>
                                                </SettingRow>
                                            </SettingFieldSet>
                                        </SettingSection>
                                        <SettingSection>
                                                    <FieldFacebook>
                                                        <FieldLabel>FACEBOOK</FieldLabel>
                                                        <FiedlWrap>
                                                            <FieldInput />
                                                        </FiedlWrap>
                                                    </FieldFacebook>
                                                    
                                        </SettingSection>
                                    </SetttingList>
                                    <SetttingControl>
                                        <ButtonSetting>
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

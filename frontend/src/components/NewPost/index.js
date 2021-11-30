import React from 'react'
import {Outer, OuterInner, SectionUpload, UploadCenter, UploadWrapper, UploadHead, UploadTitleH2,
    UploadForm, UploadList, UploadItem, UploadCategory, UploadNote, UploadFile, UploadInput ,
    UploadIcon, IconUpload, UploadFormat, UploadFieldSet, Field, FieldLabel, FieldWrap,
    FieldInput , UploadRow, UploadCol, UploadFoot, ButtonUpload, Info, InfoInner, InfoTitle, TipTitle, TipDescription
} from './NewPostElements.js'
const index = () => {
    return (
        <Outer>
            <OuterInner>
                <SectionUpload>
                    <UploadCenter>
                        <UploadWrapper>
                            <UploadHead>
                                <UploadTitleH2>
                                    Upload New Post
                                </UploadTitleH2>
                            </UploadHead>
                            <UploadForm>
                                <UploadList>
                                    <UploadItem>
                                        <UploadCategory>
                                            New property
                                        </UploadCategory>
                                        <UploadNote>
                                        Drag or choose your file to upload
                                        </UploadNote>
                                        <UploadFile>
                                            <UploadInput type="file"></UploadInput>
                                            <UploadIcon>
                                                <IconUpload />
                                                <UploadFormat>PNG, GIF, WEBP, MP4. Max 1Gb.</UploadFormat>
                                            </UploadIcon>
                                        </UploadFile>
                                    </UploadItem>
                                        <UploadCategory>Property Detail</UploadCategory>
                                        <UploadFieldSet>
                                            <Field>
                                                <FieldLabel>NAME</FieldLabel>
                                                <FieldWrap>
                                                    <FieldInput></FieldInput>
                                                </FieldWrap>
                                            </Field>
                                            <Field>
                                                <FieldLabel>DESCRIPTION</FieldLabel>
                                                <FieldWrap>
                                                    <FieldInput></FieldInput>
                                                </FieldWrap>
                                            </Field>
                                            
                                        </UploadFieldSet>
                                    <UploadItem>
                                        <UploadRow>
                                            <UploadCol>
                                                <Field>
                                                    <FieldLabel>Square</FieldLabel>
                                                    <FieldWrap>
                                                        <FieldInput></FieldInput>
                                                    </FieldWrap>
                                                </Field>
                                            </UploadCol>
                                            <UploadCol>
                                                <Field>
                                                    <FieldLabel>Room</FieldLabel>
                                                    <FieldWrap>
                                                        <FieldInput></FieldInput>
                                                    </FieldWrap>
                                                </Field>
                                            </UploadCol>
                                            <UploadCol>
                                                <Field>
                                                    <FieldLabel>Price</FieldLabel>
                                                    <FieldWrap>
                                                        <FieldInput></FieldInput>
                                                    </FieldWrap>
                                                </Field>
                                            </UploadCol>
                                        </UploadRow>    
                                    </UploadItem>
                                </UploadList>

                                <UploadFoot>
                                    <ButtonUpload>Create property</ButtonUpload>
                                </UploadFoot>
                            </UploadForm>
                        </UploadWrapper>
                        <Info>
                            <InfoInner>
                                <InfoTitle>Tips for seller</InfoTitle>
                                <TipTitle>Choose an agent</TipTitle>
                                <TipDescription>The Agent Search engine on Rental also allows you to research agents based on location, property type and price range.</TipDescription>
                                <TipTitle>Choose a time to sell</TipTitle>
                                <TipDescription>Spring is a popular time to sell, but the real estate market operates all year round.</TipDescription>
                                <TipTitle>Choose an agent</TipTitle>
                                <TipDescription>The Agent Search engine on Rental also allows you to research agents based on location, property type and price range.</TipDescription>
                                <TipTitle>Choose an agent</TipTitle>
                                <TipDescription>The Agent Search engine on Rental also allows you to research agents based on location, property type and price range.</TipDescription>
                                
                            </InfoInner>
                        </Info>
                    </UploadCenter>
                </SectionUpload>
            </OuterInner>
        </Outer>
    )
}

export default index

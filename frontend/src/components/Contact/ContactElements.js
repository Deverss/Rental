import styled from 'styled-components';
import {IoMailOpenOutline} from 'react-icons/io5';
import {BsPinMap} from 'react-icons/bs';
import {ImPhoneHangUp} from 'react-icons/im';
import {VscAccount} from 'react-icons/vsc';
import {RiSendPlaneFill} from 'react-icons/ri';
import {GoDeviceMobile} from 'react-icons/go';
import {BsChatLeftText} from 'react-icons/bs';

export const ContactContainer = styled.div`
    position: relative;
    padding: 162px 100px 60px;
    display: block;
    background-color: #fff;
`

export const ContactWrap = styled.div`
    position: relative;
    z-index: 3;
    margin-bottom: 85px;
    display: inline-block;
    box-sizing: inherit;
`

export const LineSection = styled.div`
    display: inline-block;
    align-content: center;
    align-items: center;
    padding: 0 10px 5px 0px;
`

export const Line = styled.div`
    border: 1px solid #506fea;
    width: 55px;
    display: flex;
    align-items: center;
`

export const ContactStage = styled.div`
    position: relative;
    padding: 10px;
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 1.4;
    font-weight: 600;
    color: #506fea;
    display: inline-block;
`

export const ContactTitle = styled.h2`
    display: flex;
    font-size: 80px;
    line-height: 1.16667;
    letter-spacing: -.5px;
    color: #141416;
    max-width: 600px;
    margin-bottom: 40px;
`

export const ContactInfo = styled.div`
    max-width: 366px;
    color: #6b6b6b;
    font-size: 22px;
`

export const ContactImage = styled.img`
    position: relative;
    display: inline-block;
    max-height: 500px;
    max-width: 500px;
    align-items: center;
    border-radius: 30px;
    margin: 0 0 0 auto;
`

export const ContactDetail = styled.div`
    flex-shrink: 0;
    width: 340px;
    margin-right: auto;
    display: inline-block;
    font-size: 18px;
    line-height: 1.77778;
    color: #141416;
`

export const ContactLine = styled.div`
    display: flex;
    margin-bottom: 40px;
`

export const MailIcon = styled(IoMailOpenOutline)`
    display: flex;
    flex-shrink: 0;
    width: 24px;
    height: 30px;
    margin-right: 45px;
    align-items: center;
    justify-content: center;
    color: #506fea;
`

export const MapIcon = styled(BsPinMap)`
    display: flex;
    flex-shrink: 0;
    width: 24px;
    height: 30px;
    margin-right: 45px;
    align-items: center;
    justify-content: center;
    color: #506fea;
`

export const PhoneIcon = styled(ImPhoneHangUp)`
    display: flex;
    flex-shrink: 0;
    width: 24px;
    height: 30px;
    margin-right: 45px;
    align-items: center;
    justify-content: center;
    color: #506fea;
`

export const ContactForm = styled.div`
    display: block;
    flex-shrink: 0;
    width: 468px;
    display: inline-block;
`

export const ContactField = styled.div`
    margin-bottom: 24px;
`

export const FieldWrap = styled.div`
    position: relative;

`

export const FieldInput = styled.div`
    height: 72px;
    padding: 0 72px 0 24px;
    width: 100%;
    background: rgba(244, 244, 244, 0.801191);
    border-radius: 12px;
    border: 2px solid rgba(244, 244, 244, 0.801191);
    font-size: 18px;
    color: #141416;
`

export const NameIcon = styled(VscAccount)`
    position: absolute;
    display: flex;
`

export const SendIcon = styled(RiSendPlaneFill)`
    position: absolute;
`

export const MobileIcon = styled(GoDeviceMobile)`
    position: absolute;
`

export const TextIcon = styled(BsChatLeftText)`
    position: absolute;
`
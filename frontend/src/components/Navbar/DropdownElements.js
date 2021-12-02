import styled from 'styled-components';

    export const DropdownSection = styled.div`
    z-index: 9999;
    position: absolute;
    inset: 0px 0px auto auto;
    margin: 0px;
    transform: translate(-230px, 70px);
    max-width: calc(100vw - 10px);
    background : white;
    border-radius : 10px;
    
    `
    export const Wrapperul = styled.ul`
    list-style:none;
    
    background: var(--white-color);
    box-shadow: 0 -4px 32px rgb(0 0 0 / 20%);
    transition: all .3s ease-in-out;
    -webkit-animation: Tippy_fadeIn__11vEW .3s ease;
    animation: Tippy_fadeIn__11vEW .3s ease;
    border-radius: 10px;
    padding-left: 0;
    margin: 0;
    overflow: hidden;
    will-change: opacity,transform;
    color: #1d2129;
    min-width: 230px;
    padding: 8px 24px;
    
    `
    export const UserMenuUser = styled.div`
    display: flex;
    align-items: center;
    `
    export const UserMenuAvatar = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin: 10px 0;
    `
    export const UserMenuInfo = styled.div`
    margin-left: 12px;
    `
    export const UserMenuName = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: #292929;
    `
    export const UserMenuUserName = styled.p`
   
    color: #757575;
    
    `
    export const UserMenuList = styled.ul`
    padding-left: 0;
    margin: 0;
    `
    export const UserMenuli = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
    padding: 10px 0;
    list-style:none;
    border-radius : 10px;
    padding : 10px;
    margin : 5px 0;
    &:hover {
        background : #dedede;
        cursor : pointer;
    }
    `
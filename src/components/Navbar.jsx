import React from 'react'
import styled from 'styled-components'
import { GithubOutlined, StarFilled } from '@ant-design/icons';
import Searchbar from './Searchbar';
import { useNavigate } from 'react-router';
const Root = styled.div`
    height: 30px;
    position: fixed;
    top: 0;
    padding: 20px;
    background-color: #000000;
    width: 100%;
    display: flex;
    gap: 20px;
    z-index: 2;
`
const MenuItem = styled.div`
    font-size: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #f6f6f6;
    cursor: pointer;
    &:nth-child(3) {
       justify-self: flex-end;
    }
`
export default function Navbar() {
    const navigate = useNavigate();
    const goTo = (path) => {
        navigate(path);
    }

    return (
        <Root>
            <MenuItem onClick={()=>goTo('/')}>MOVIE APP </MenuItem>
            <MenuItem onClick={()=>goTo('/favs')}>My favourites <StarFilled /></MenuItem>
            <MenuItem>
                <Searchbar /> 
            </MenuItem>
            <MenuItem><GithubOutlined  onClick={()=>goTo('/favs')}/></MenuItem>
        </Root>
    )
}

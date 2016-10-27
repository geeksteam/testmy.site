import React from "react";
import "./Header.css";

export default class Header extends React.Component {
    render = () => {
        return(
            <div className="header-logo">
                <img src="/img/test-dns-of-your-web.png" alt="test your dns" />
                <img src="/img//icon---logo.png" alt="logo" />
            </div>
        );
    }
}
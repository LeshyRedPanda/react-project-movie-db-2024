import React from 'react';

const FooterComp = () => {
    return (
        <div className={'footerComp'}>
            <div className={'footerLogo'}></div>
            <div className={'footerDiv'}>
                <h2>THE BASICS</h2>
                <p>About TMDB</p>
                <p>Contact Us</p>
                <p>Support Forums</p>
                <p>API</p>
                <p>System Status</p>
            </div>
            <div className={'footerDiv'}>
                <h2>GET INVOLVED</h2>
                <p>Contribution Bible</p>
                <p>Add New Movie</p>
                <p>Add New TV Show</p>

            </div>
            <div className={'footerDiv'}>
                <h2>COMMUNITY</h2>
                <p>Discussions</p>
                <p>Leaderboard</p>
                <p></p>
                <p></p>
            </div>
            <div className={'footerDiv'}>
                <h2>LEGAL</h2>
                <p>Terms of Use</p>
                <p>API Terms of Use</p>
                <p>Privacy Policy</p>
                <p>DMCA Policy</p>
            </div>


        </div>
    );
};

export default FooterComp;
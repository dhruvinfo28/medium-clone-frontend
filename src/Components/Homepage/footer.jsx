import React from 'react'
import './footer.css'

const Footer = ()=>{
    return <>
        <section className="footer-wrapper">
            <article className="footer-first">
                <div className="footer-children">
                    <h3>Learn More.</h3>
                    <p>
                   Medium is an open platform where 170 million readers come to find insightful and dynamic thinking.Learn more
                   </p>
                </div>
                <div className="footer-children">
                    <h3>Make Medium Yours.</h3>
                    <p>
                    Follow the writers, publications, and topics that matter to you, and you’ll see them on your homepage and in your inbox. Explore
                    </p>

                </div>
                <div className="footer-children">
                    <h3>Share Your Thinking.</h3>
                    <p>
                    If you have a story to tell, knowledge to share, or a perspective to offer — welcome home. It’s easy and free to post your thinking on any topic. Write on Medium
                    </p>

                </div>
              
            </article>
            <article className="footer-second">

            </article>
        </section>
    </>
}

export default Footer;
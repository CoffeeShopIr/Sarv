export default function Footer(){
    return(
        <>
            {/* // html need to write here */}
            <div className="footer">
                <div className="information">
                    <div>
                        <img src="/instagram.png" />
                        <p><strong>اینستاگرام: </strong><a href="instagramURL">@instaPageId</a></p>
                    </div>
                    <div>
                        <img src="/phone.png"  />
                        <p><strong>تلفن: </strong>6969 8585 021</p>
                    </div>
                    <div>
                        <img src="/location.png" />
                        <p><strong>آدرس:</strong> اندیشه، خیابان فلان، کوچه بهمان، پلاک 77</p>
                    </div>
                </div>
                <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12967.47717466306!2d51.0637806703722!3d35.6555918170873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8df3b99e59994f%3A0xea0663249921ab43!2z2qnYp9mB2Ycg2LHYs9iq2YjYsdin2YYg2LPYsdmI!5e0!3m2!1sen!2s!4v1767188072334!5m2!1sen!2s" width="100%" height="100%" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div>
            </div>
        </>
    )
}
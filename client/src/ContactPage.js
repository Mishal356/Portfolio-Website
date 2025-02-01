import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <nav>Menu</nav>
            <section>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea name="message"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>
            <footer>Footer</footer>
        </div>
    );
};

export default ContactPage;

import React from 'react'
import "./Clients.css";
import SingleClient from './SingleClient';
import emily from "../images/image-emily.jpg";
import thomas from "../images/image-thomas.jpg"
import jennie from "../images/image-jennie.jpg";


function Clients() {
    return (
        <section className="reviews">
            <h2>Client Testimonials</h2>
            
            <div className="clientContainer">
                <SingleClient 
                    imageSrc={emily} 
                    authorReview="We put our trust in Sunnyside and they delivered, making sure our needs
                    were met and deadlines were just always hit."
                    authorName="Emily R."
                    authorRole="Marketing Director" 
                />
                <SingleClient 
                    imageSrc={thomas} 
                    authorReview="We put our trust in Sunnyside and they delivered, making sure our needs
                    were met and deadlines were just always hit."
                    authorName="Emily R."
                    authorRole="Marketing Director" 
                />
                <SingleClient 
                    imageSrc={jennie} 
                    authorReview="We put our trust in Sunnyside and they delivered, making sure our needs
                    were met and deadlines were just always hit."
                    authorName="Emily R."
                    authorRole="Marketing Director" 
                />
                
            </div>
            
        </section>
    )
}

export default Clients

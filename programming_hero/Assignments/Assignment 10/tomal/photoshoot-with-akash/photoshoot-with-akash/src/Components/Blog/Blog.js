import React from 'react';

const Blog = () => {
    return (
        <div className='m-8'>
            <p className='text-2xl font-semibold'>Difference between 'authorization' and 'authentication' ?</p>
            <p> Authentication is the process of verifying who the person is. On the other hand  authorization is the process of verifying that specific applications, files, and data a user has accessing is really belong to the user or not. In online world authorization is used to varify whether the person or the user is correct or not and then authentication is used for whether the product the user is using is really belong to him or not. Authentication comes first after authorization. </p>
            <br />
            <p className='text-2xl font-semibold'>Why are you using `firebase`? What other options do you have to implement authentication?</p>
            <p>Currently online services are increased and that's why the demand of online authentication has now sky rocket. Doing this for small startups by themselves is both costly and time consuming. Sometime they dont care about security that much as they have to care other stuffs much. But this is important to implement. In this case google a big tech company why invests huge money and able to make a secure authentication system. As they are big company companies can rely on them. So company use them more and more to handle backend tasks. They also offering cheap price and very developer friendly enviornment which is why people using this more and more. This platfrom also host website and make analysis of traffic and other stuffs. This also provide authentication of game, mobile app, ios and many more.<br/> Some of the alternate of Back4App, AWS Amplify, Couchbase and NativeScript. These are some other company which provide the authentication facilities like firebase.</p>
            <br />
            <p className='text-2xl font-semibold'> What other services does 'firebase' provide other than authentication? </p>
            <p> Firebase provide web hosting facility which is also popular than authentication. It provide cloud messageing, cloud functions, cloud storage, google analytics, predictions and many more. </p>
        </div>
    );
};

export default Blog;
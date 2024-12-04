import React from 'react';
import { Helmet } from 'react-helmet';

function HeadInfo() {
    return (
        <Helmet>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* <!-- Favicon --> */}
            <link rel="android-chrome-icon" type="image/png" sizes="192x192" href="/studypage-group-react/android-chrome-192x192.png" />
            <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/studypage-group-react/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/studypage-group-react/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/studypage-group-react/favicon-16x16.png" />
            <link rel="icon" href="/studypage-group-react/favicon-group.ico"></link>
            <link rel="manifest" href="/studypage-group-react/site.webmanifest" />

            {/* <!-- Site Description --> */}
            <meta name="description" content="ERB Yachting" />
            <meta name="keywords" content="HTML, CSS, JavaScript" />
            <meta name="author" content="ERB Yachting Group" />
            <meta name="robots" content="index, follow" />

            {/* <!-- Font Awesome --> */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

            {/* <!-- Font Family --> */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />

            {/* <!-- Jquery --> */}
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

            {/* <!-- Title --> */}
            <title>ERB Yachting</title>
        </Helmet>
    );
}

export default HeadInfo;



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Class Exercise 06d</title>
    <link rel="stylesheet" href="styles.css">
    <script src="index.js"></script>
</head>
<body>
        <!--
        This div tag with the id 'outerDiv' is used to contain
        the rest of the page. I can use this div to control the
        overall placing of the elements on the page.
    -->
    <div id='outerDiv'>
        <!--
            This div could easly have been a section or aside tag
            as it is being used to layout other elements of the page.
        -->
        <div>
            <!--
                Here we have an un-ordered list to group our links
                as indivitual line items horizontally.
            -->
            <ul>
                <li>
                    <!--
                        This link is calling a function that is in our script tag.
                        'onclick' is an event attribute. All tags can use the onclick
                        attriute.
                    -->
                    <a href="#" onclick='changeLinkText("ce")'>Class Exercises</a>
                </li>
                <li>
                    <a href="#" onclick='changeLinkText("a")'>Assignments</a>
                </li>
            </ul>
        </div>

        
        <!-- Start of Side Bar Section -->

        <!--
            This div could easly have been a section or aside tag
            as it is being used to layout other elements of the page.
        -->
        <div id='innerDivBodyLeft_Default'>
            <h4 id="ls_Heading">ITC-111</h4>
            <hr>
            <!-- Seen when page loads or when Home is clicke. Visibility on by default  -->
            <div id="divLeftDefault">
                <a href='#' class='divLeftLinks' onclick='changeDivRightText("Course Overview")'>Course Overview</a><br>
                <a href='#' class='divLeftLinks' onclick='changeDivRightText("Goals & Objectives")'>Goals & Objectives</a><br>
                <a href='#' class='divLeftLinks' onclick='changeDivRightText("History")'>History</a>
            </div>
            <!-- Seen when Class Exercise Link is clicked. -->
            <div id="divLeft_CELinks">
                <a href='#' class='divLeftLinks' onclick='changeDivRightText("Class Ex 01")'>Class Exercise 01</a><br>
                <a href='#' class='divLeftLinks' onclick='changeDivRightText("Class Ex 02")'>Class Exercise 02</a><br>
            </div>
            <!-- Seen when Assignments Link is clicked. -->
            <div id="divLeft_ALinks">
                <a href='#' class='divLeftLinks' onclick='changeDivRightText("Assignment 01")'>Assignment 01</a><br>
                <a href='#' class='divLeftLinks' onclick='changeDivRightText("Assignment 02")'>Assignment 02</a><br>
            </div>
        </div>
        <!-- End of Side Bar Section -->


        <!--
            This div is lined up right next to the previous one. CSS is used to align it
            to the left. Div's would normaly stack as they are block elements.
        -->
        <div id='innerDivBodyRight'>
            <h2 id="rs_Heading">Intro to Programming <br>w/HTML, CSS & JavaScript</h2>
            <p id='divRight'>Content loaded in div on page load by default.</p>
        </div>
    </div>
</body>
</html>
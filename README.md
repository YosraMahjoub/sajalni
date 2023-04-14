# Sajalni - Web development
##  Development of a web application for validation of telephone device registration.

This project aims to develop an application that allows processing and validating requests for adding a phone device imported via the post office and passed through the border offices.

To guarantee protection against the phenomenon of cell phone theft, the customer must first go to the Border Office as soon as he receives a notification of a package. The agent of the border office then enters the folder of the phones and the customer proceeds to register them on the application site. Finally, the technical controller studies the imported applications one by one and makes a decision for each of them, he accepts the application and therefore the phones will be allowed to communicate on the public telecommunications networks, or refuses it and therefore the phones will be blocked and forbidden to access the operators' services. 


 <details><summary> <h3> 💻 Technologies </h3></summary>

 > ####  Back-end  :
<ol>
<li>Java 8</li>
<li> SpringBoot </li>
 <li> JPA </li>
 <li> Spring Security </li>
</ol>
 
 >  ####  Front-end  :
<ol>
<li>Angular</li>
<li> Bootstrap </li>
 <li> Typescript </li>
</ol>
  
 >  ####  Database Management  :
<ol>
<li> MySql </li>
</ol>

</details>
 <details><summary> <h3>💻 Features  </h3></summary>

The device validation System can be accessed by four categories of users: Customers, technical controllers, border office agents and administrators.

> #### Features for Customeres
 <ol>
<li>Customers can create a new account in order to log in.</li>
<li> Customers can make a validating request, view current requests, and modify and cancel a request, if needed. </li>
<li> Customers can consult their profiles: and modify it., if needed. </li>
</ol>
 
 
 > #### Features for Border office agents
 <ol>
<li>Border office agents can create a new account in order to access the folder management features.</li>
<li> Border office agents can make a validating folder, view current folders, modify and delete his folder, if needed as long as it is not yet validated. </li>
<li> Border office agents can consult the different actions of other users on their folders.</li>
</ol>
 
> #### Features for Technical controllers
 <ol>
<li>Technical controllers can create a new account in order to access the folder management features.</li>
<li>Technical controllers can accept/refuse requests/folders.  </li>
<li>Technical controllers can consult the different actions of other users on the folders.</li>
</ol>
 
> #### Features for Administrators
 <ol>
<li> Administrators can create accounts .</li>
<li>Administrators can view all details of requests/folders. </li>
<li>Administrators can add, modify, and delete folders. </li>
 </ol>
</details>

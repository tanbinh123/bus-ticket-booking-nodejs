# bus-ticket-booking-nodejs


Functionalities included in this code as of now 

1.booking a ticket.

2.Checking status of the ticket.

3.Displaying all the tickets.

4.displaying the tickets which are booked.

5.displaying the tickets which are not booked.

6.updating the booked ticket details.

7.cancelling the ticket

8.admin resetting the tickets.

9.displaying the ticket details of a single id




API DOCS:


POST :'/ticketsave'

-> saving the ticket object in the ticket collection, only when the document count is less than 20

-> returns 200, if success otherwise returns 400 with an error in the format {message:"error details"}


GET : '/viewall'

->returns all the tickets
->returns 200, if success otherwise returns 400 with an error in the format {message:"error details"}


GET :'/viewOpen'

->returns all the tickets which are open
->returns 200, if success otherwise returns 400 with an error in the format {message:"error details"}


GET :'/ticket/:ticket_id'

->returns the status of a ticket, whether it is booked or not 
->returns 200, if success otherwise returns 400 with an error in the format {message:"error details"}



GET:'/:t_id'

-> returns the single ticket document with the help of ID
->returns 200, if success otherwise returns 400 with an error in the format {message:"error details"}


DELETE : '/cancel/:id'

->delete's the ticket, where ID is requested of that ticket
->returns 200, if success otherwise returns 400 with an error in the format {message:"error details"}


PATCH :'/update/:t_id'


-> updates the ticket details with the help of ID, where ID is requested
->returns 200, if success otherwise returns 400 with an error in the format {message:"error details"}


PUT : '/admin/reset'

->Resets all the tickets in the collection 
->returns 200, if success otherwise returns 400 with an error in the format {message:"error details"}
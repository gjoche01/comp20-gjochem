1. Identify what aspects of the work have been correctly implemented and what have not.
I think that I have implemented everything correctly. My css could make the page look nicer. 

2. Identify anyone with whom you have collaborated or discussed the assignment.
Sophie Maki, and help from the TA, Jim.


3. Say approximately how many hours you have spent completing the assignment.
I spent about two hours on this assignment. 

4. Questions 

Part 2 of the lab: 
No, this doesn't work. This shouldn't work. Your origin is file:// and
you can't make a XMLHTTP request. You can only make requests for certain protocol schemes, like http, https, etc, not to a file system. Although this would depend on your browser, as some will allow this. 

Part 3 of the lab: 
No, this also doesn't work. Again, its beacuse your origin is not  https://messagehub.herokuapp.com, so you cannot load this data. 

Answers to last question, is it possible to request the data from a different origin?
No, you can't request data from a different origin (unless it is explicitly made open by its creator, like the T data we used in class). This is because of the same origin policy. The wikapedia page summed this idea up well, XMLHtpp request will ß"only succeed if they are made to the host that served the original web page."


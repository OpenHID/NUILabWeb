import { Injectable } from '@angular/core';

@Injectable()
export class TeachService {
    getClasses()
    {
        return (
            {
                "Semesters":
                {
                    "Fall2018":
                    [
                        {
                            "code":"CS457",
                            "name":"Computer Networks and the Internet",
                            "time":"10:00AM-11:00AM",
                            "description":"This senior level undergraduate course covers principles of data communications, local area networks, communications protocols, TCP/IP, and the Internet.",
                            "isLink":true,
                            "link":"https://www.cs.colostate.edu/~cs457"
                        }
                    ],
                    "Spring2019":
                    [
                        {
                            "code":"CS457",
                            "name":"Computer Networks and the Internet",
                            "time":"10:00AM-11:00AM",
                            "description":"This senior level undergraduate course covers principles of data communications, local area networks, communications protocols, TCP/IP, and the Internet.",
                            "isLink":false,
                            "link":"https://www.cs.colostate.edu/~cs457"
                        }
                    ]
                }
            }
        );
    }
}
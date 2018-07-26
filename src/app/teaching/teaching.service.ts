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
                            "time":"TBA",
                            "description":"This senior level undergraduate course covers principles of data communications, local area networks, communications protocols, TCP/IP, and the Internet.",
                            "isLink":true,
                            "link":"https://www.cs.colostate.edu/~cs457"
                        }
                    ],
                    "Spring2019":
                    [
                        {
                            "code":"CS464",
                            "name":"Principles of Human-Computer Interaction",
                            "time":"TBA",
                            "description":"Human-Computer Interaction teaches the fundamental issues that underlie the creation and evaluation of usable and useful computational artifacts. Over the term, students will learn how to design novel computational artifacts that enable a well-defined user group to achieve specific goals more effectively than via current means.",
                            "isLink":false,
                            "link":"https://www.cs.colostate.edu/~cs464/"
                        }
                    ]
                }
            }
        );
    }
}
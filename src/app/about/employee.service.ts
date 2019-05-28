import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {

  constructor(private _http:Http)
    {}

    getEmployees()
    {
        return (
            {
                "Faculty":
                {
                  "PHD":
                  [
                    {
                      "name":"Francisco R. Ortega",
                      "education":"Ph.D.",
                      "major":"Computer Science",
                      "position":"Assistant Professor & Director of NUILab",
                      "email":"fortega@colostate.edu",
                      "university": "Colorado State University (Fort Collins, CO)",
                      "cv":"http://nuilab.org/assets/papers/ortega-cv-new.pdf",
                      "website":"website",
                      "image":"assets/images/people/francisco-ortega3.jpg",
                      "description":"<p>Dr. Francisco R. Ortega is an Assistant Professor at Colorado State University. Dr. Ortega earned his Ph.D. in Computer Science (CS) in the field of Human-Computer Interaction (HCI) and 3D User Interfaces (3DUI) from Florida International University (FIU). He also hold a position of Post-Doc and Visiting Assistant Professor at FIU between February 2015 to July 2018. Broadly speaking, his research has focused on gesture interaction, which includes gesture recognition and elicitation. His main research area focuses on improving user interaction by (a) eliciting (hand and full-body) gesture sets by user elicitation, and (b) developing interactive gesture-recognition algorithms. His secondary research aims to discover how to increase interest for CS in non-CS entry-level college students via virtual and augmented reality games. His research has resulted in multiple peer-reviewed publications in venues such as ACM ISS, ACM SUI, and IEEE 3DUI, among others. He is the first-author of Interaction Design for 3D User Interfaces: The World of Modern Input Devices for Research, Applications, and Game Development book by CRC Press. Dr. Ortega serves as Vertically Integrated Projects coordinator that promotes applied research for undergraduate students across disciplines.<\/p> <p>Dr. Ortega is committed to teaching and integrating research in the classroom. He has taught multiple courses including CS capstone, Programming II (Java), Programming III (C), Operating Systems, Principles of Relational Database Management Systems (graduate), Network Management and Control Standards (graduate), Net-Centric (using Python), Web Application Programming, Website Management, and Construction, Windows Programming (C#), Digital Forensics, Advanced Digital Forensics (graduate), Advanced Ethical Hacking (graduate), and Practical Applied Security (graduate).<\/p>"
                    },
                  ],

                  "AffiliatedCSU":
                  [
                    {
                      "name":"Bruce A. Draper",
                      "education":"Ph.D.",
                      "major":"Computer Science",
                      "position":"Professor",
                      "email":"draper@colostate.edu",
                      "university": "Colorado State University (Fort Collins, CO)",
                      "cv":"cv",
                      "website":"http://www.cs.colostate.edu/~draper/",
                      "image":"assets/images/people/bruce-draper.png",
                      "description":"<p>Dr. Bruce A. Draper is a professor of Computer Science at Colorado State University; he also holds an appointment in the Molecular, Cellular and Integrated Neuroscience (MCIN) program. He teaches at virtually all levels of the curriculum, with a recent emphasis at the undergraduate level on CS253 (Software Engineering in C++) and at the graduate level on CS510 (Image Computation). His research is in recognizing people, their gestures, and their actions, and applying this to complex systems of interacting people and machines. He has served the field in many capacities, including as General Chair of CVPR in 1999 and a senior program committee member for AAAI in 2015 and 2016, but his recent service efforts have concentrated on the department, serving as graduate program director for three years, serving multiple terms on the executive committee, and working toward greater diversity within the department.<\/p>"
                    },
                    {
                      "name":"Ross Beveridge",
                      "education":"Ph.D.",
                      "major":"Computer Science",
                      "position":"Professor",
                      "email":"ross@cs.colostate.edu ",
                      "university": "Colorado State University (Fort Collins, CO)",
                      "cv":"cv",
                      "website":"http://www.cs.colostate.edu/~ross/",
                      "image":"assets/images/people/ross-beveridge.jpeg",
                      "description":"<p>Dr. Ross Beveridge is a Professor in the Computer Science Department at Colorado State University. The best part of being a professor for him is the balance between teaching and research. He says that teaching provides immediate gratification: there is always a new lecture to prepare and always new and inquisitive students to question us as they learn. Both what he teaches and how he teaches is constantly changing, and the intellectual give-and-take with students is invigorating in his opinion. <br><br>Balancing the immediacy of teaching is research. He works in an area called computer vision. People can visually see and recognize objects effortlessly. For example, a person can instantly recognize a squirrel on a log. The goal of computer vision is to develop machines that can do this just like people do. Much of his own work on computer vision has been done in partnership with his colleague Bruce Draper; the two of them jointly run the Computer Vision Group at CSU. His recent research is centered enhanced humman machine communication through shared context including mutual understanding of physical presence non-verbal communication.<\/p>"
                    },
                   
                  ],

                  "AffiliatedFIU":
                  [
                    {
                      "name":"Valentina Bruk-Lee",
                      "education":"Ph.D.",
                      "major":"Organizational Psychology",
                      "position":"Associate Professor",
                      "email":"vblee@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "cv":"cv",
                      "website":"http://myweb.fiu.edu/vblee/",
                      "image":"assets/images/people/valentina-lee.png",
                      "description":"<p>Dr. Bruk-Lee’s research is primarily focused on the topics of interpersonal conflict in organizations, employee satisfaction, occupational health and well-being, employee selection. She is also interested in counter-productivity in organizations and the role of personality in the job stress process. Dr. Bruk-Lee has consulted with both private and public sector organizations in the areas of employee selection, job analysis, performance measurement, and competency modeling. She has also led the development and localization of assessments used in global selection programs. <br><br>Dr. Bruk-Lee has served on the state level committee for the APA’s Psychologically Healthy Workplace Award and on SIOP’s Professional Practice Committee on Occupational Health, Safety, and Well-Being.<\/p>"
                    },
                    {
                      "name":"Asia Eaton",
                      "education":"Ph.D.",
                      "major":"Psychology and Gender Studies",
                      "position":"Assistant Professor",
                      "email":"aeaton@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "cv":"cv",
                      "website":"http://faculty.fiu.edu/~aeaton/",
                      "image":"assets/images/people/asia-eaton.png",
                      "description":"<p>Broadly, Dr. Eaton's research explores the relationship between social power and gender in the U.S. and the implications of enacting powerful roles and gender roles for individuals’ attitudes and behaviors. She is currently examining how gender and social power support one another and interact in organizations and in intimate relationships.<\/p>"
                    },
                    {
                      "name":"Newton D’souza",
                      "education":"Ph.D.",
                      "major":"Architecture",
                      "position":"Chair and Associate Professor",
                      "email":"ndsouza@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "cv":"cv",
                      "website":"http://carta.fiu.edu/interiors/faculty-staff/faculty-directory/",
                      "image":"assets/images/people/newton-dsouza.jpg",
                      "description":"<p>Newton D’souza is an Associate Professor at the Department of Interior Architecture, Florida International University. He holds a PhD in architecture from University of Wisconsin-Milwaukee, and a Masters degree in design from the National University of Singapore. He has previously served as a Director of Graduate Studies at the Department of Architectural Studies, and a faculty collaborator at the Immersive Lab, University of Missouri-Columbia. He has also practiced as an architect and interior designer at Bangalore, India. <br><br>During the past two decades, his research and teaching has focused on design cognition, creativity, human factors for design, environment-behavior and emerging media environments. He is widely published in Journal of Design Studies, Architecture Research Quarterly, and Journal of Design Research. Currently, he is authoring a book titled ‘The Multi-Skilled Designer: A Cognitive Explanation for Diversity in Architectural Thinking’ from Routledge publications involving archival research from reputed and alternative architecture design practices. He initiated the Creative Convergence Network, at the University of Missouri involving a multidisciplinary faculty forum to investigate multidisciplinary team creativity, and whose work was recently published in a special section of journal of design studies.<br><br>He serves as an active member of the Environment Design Research Association and the Design Thinking Research Symposium. He is a recipient of several grant funding awards including MU System Research Board award, MU Research Council Award, and Mizzou Advantage Media of the Future Award. He has served as a chair and committee member for various graduate doctoral committees and was a recipient of 2014 Ernest L. Boyer International Award for Excellence in Teaching, Learning, and Technology.<\/p>"
                    },
                  ]

                },

                "AF": //Not being used
                {
                  "PHD":
                  [
                    {
                      "name":"Bruce A. Draper",
                      "education":"Ph.D.",
                      "major":"Computer Science",
                      "position":"Professor",
                      "email":"draper@colostate.edu",
                      "university": "Colorado State University (Fort Collins, CO)",
                      "cv":"cv",
                      "website":"http://www.cs.colostate.edu/~draper/",
                      "image":"assets/images/people/bruce-draper.png",
                      "description":"<p>Dr. Bruce A. Draper is a professor of Computer Science at Colorado State University; he also holds an appointment in the Molecular, Cellular and Integrated Neuroscience (MCIN) program. He teaches at virtually all levels of the curriculum, with a recent emphasis at the undergraduate level on CS253 (Software Engineering in C++) and at the graduate level on CS510 (Image Computation). His research is in recognizing people, their gestures, and their actions, and applying this to complex systems of interacting people and machines. He has served the field in many capacities, including as General Chair of CVPR in 1999 and a senior program committee member for AAAI in 2015 and 2016, but his recent service efforts have concentrated on the department, serving as graduate program director for three years, serving multiple terms on the executive committee, and working toward greater diversity within the department.<\/p>"
                    }
                  ]
                },
                
                "Current":
                {
                  "PHD":
                    [
                      {
                        "name":"Adam Williams",
                        "education":"Ph.D.",
                        "major":"Computer Science",
                        "position":"Graduate Research Assistant",
                        "email":"adam.sinclair.williams@colostate.edu",
                        "university": "Colorado State University (Fort Collins, CO)",
                        "website":"website",
                        "image":"assets/images/people/adam-williams.png",
                        "description":"Graduate research assistant researching 3D user interactions using gestures and speech."
                      }
                    ],
                  "MDS":
                  [
                    {
                      "name":"Fernando de Zayas",
                      "education":"B.S.,M.S.",
                      "major":"Computer Science",
                      "position":"Graduate Research Assistant",
                      "email":"fdeza001@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/fernando-zayas.jpg",
                      "description":"Graduate research assistant."
                    }
                  ],
                  "MDSCSU":
                  [
                    {
                      "name":"Aditya Raikwar",
                      "education":"B.S.,M.S.",
                      "major":"Computer Science",
                      "position":"Graduate Research Assistant",
                      "email":"aditya.raikwar@colostate.edu",
                      "university": "Colorado State University (Fort Collins, CO)",
                      "website":"website",
                      "image":"assets/images/people/aditya-raikwar2.png",
                      "description":"Graduate research assistant researching 3D user interfaces using gesture and speech and with an interest in Machine Learning."
                    },
                    {
                      "name":"Jason Garcia",
                      "education":"B.S.,M.S.",
                      "major":"Computer Science",
                      "position":"Graduate Research Assistant",
                      "email":"jgarc429@fiu.edu",
                      "university": "Colorado State University (Fort Collins, CO)",
                      "website":"website",
                      "image":"assets/images/people/jason-garcia.jpg",
                      "description":"Graduate research assistant."
                    },
                    {
                      "name":"Zahra Borhani",
                      "education":"B.S.,M.S.",
                      "major":"Computer Science",
                      "position":"Graduate Research Assistant",
                      "email":"zahra.borhani@colostate.edu",
                      "university": "Colorado State University (Fort Collins, CO)",
                      "website":"website",
                      "image":"assets/images/people/Faezeh_s.jpg",
                      "description":"Graduate research assistant with an interest in studying avatars and their applications in virtual reality."
                    },
                    {
                      "name":"Vidya Gaddy",
                      "education":"B.S.,M.S.",
                      "major":"Computer Science",
                      "position":"Graduate Research Assistant",
                      "email":"vidyagaddy@gmail.com",
                      "university": "Colorado State University (Fort Collins, CO)",
                      "website":"website",
                      "image":"assets/images/people/vidya_gaddy.jpg",
                      "description":"Vidya is interested in developing tools to encourage young women to get involved in computer science while in college. With a passion for psychology and a B.S. in computer science, she is programming a serious game with the goal of subtly introducing computer science concepts and terminology to the audience of the game."
                    }
                  ],
                  "BS":
                  [
                    {
                      "name":"Seidan Jamides",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Undergraduate Research Assistant",
                      "email":"sjami006@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/seidan-jamides.jpg",
                      "description":"Seidan Jamides is an undergraduate research assistant majoring Computer Science. He is currently performing research in gesture elicitation."
                    },
                    {
                      "name":"Cristina Villarroel",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Undergraduate Research Assistant",
                      "email":"cvill141@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/cristina-villarroel.jpg",
                      "description":"Cristina Villarroel is an undergraduate research assistant majoring in Computer Science. She is currently an intern at Visa Inc."
                    },
                    {
                      "name":"Arelys Alvarez",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Undergraduate Research Assistant",
                      "email":"aalva456@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/arelys-alvarez.jpg",
                      "description":"Undergraduate research assistant majoring Computer Science. She is currently an intern at Cigna."
                    },
                    {
                      "name":"Catherine Angelini",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Undergraduate Research Volunteer",
                      "email":"cange017@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/catherine-angelini.png",
                      "description":"Undergraduate research volunteer majoring Computer Science. She is currently an intern at Microsoft Corporation"
                    },
                    {
                      "name":"Fidel Hernandez",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Undergraduate Research Assistant",
                      "email":"fhern103@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/fidel-hernandez.png",
                      "description":"Undergraduate research assistant majoring Computer Science."
                    }
                  ],
    
                  "BSCSU": //Have to come up with a way to make this more organized and streamlined
                  [
                    {
                      "name":"Kellyn Dassler",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Undergraduate Research Assistant",
                      "email":"kellyndassler@gmail.com ",
                      "university": "Colorado State University (Fort Collins, CO)",
                      "website":"website",
                      "image":"assets/images/people/kellyn-dassler.jpg",
                      "description":"Undergraduate research assistant majoring Computer Science."
                    },
                    {
                      "name":"Ariana Mims",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Undergraduate Research Volunteer",
                      "email":"aricmims@rams.colostate.edu",
                      "university": "Colorado State University (Fort Collins, CO)",
                      "website":"website",
                      "image":"assets/images/people/ariana-mims.png",
                      "description":"Undergraduate research volunteer majoring Computer Science."
                    }
                  ],
                  "Affiliated":
                  [
                    {
                      "name":"Diana Ugalde",
                      "education":"B.S.",
                      "major":"Psychology",
                      "position":"Undergraduate Research Assistant",
                      "email":"dugal002@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"http://myweb.fiu.edu/vblee/students/",
                      "image":"assets/images/people/diana-ugalde.png",
                      "description":"Undergraduate research assistant majoring in Psychology."
                    },
                  ]
                },
                "Former":
                {
                  "PHD":
                  {},
                  "MDS":
                  [
                    {
                      "name":"Katherine Tarre",
                      "education":"B.S., M.S.",
                      "major":"Statistics",
                      "position":"Ph.D. student at FIU with Dr. Naphtali D. Rishe",
                      "email":"ktarr007@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/katherine-tarre.jpg",
                      "description":"Katherine Tarre is an undergraduate research assistant majoring in Statistics and International Relations. Her work is primarily focused on experimental design and statistical analysis using various computer software. In her free time she enjoys reading and problem solving."
                    },
                    {
                      "name":"Ruben Balcazar",
                      "education":"B.S.,M.S.",
                      "major":"Biology, Computer Science",
                      "position":"Engineer at Ultimate Software (Former Graduate Research Assistant)",
                      "email":"rbalc001@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/ruben-balcazar.jpg",
                      "description":"Ruben Balcazar was a graduate research assistant for the OpenHID Lab. His contributions include Unity plugins for OpenHID compliant hardware. He also interned at Ultimate Software before obtaining a full time position."
                    },
                    {
                      "name":"Jules Calella",
                      "education":"B.S.,M.S.",
                      "major":"Electrical Engineer",
                      "position":"Senior Electrical Engineer at BioBrace (Former Graduate Research Assistant)",
                      "email":"jcale004@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/jules-calella.jpg",
                      "description":"Jules Calella is a graduate research assistant. He has a primary interest is in electronics, with a focus in communications and digital electronics."
                    },
                    {
                      "name":"Mathew Kress",
                      "education":"B.S., M.S",
                      "major":"Software Engineering, Computer Engineering",
                      "position":"Former graduate Research Assistant",
                      "email":"mkres006@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/mathew-kress.jpg",
                      "description":"Mathew Kress is a graduate volunteer working on applications with the HTC Vive and Hololens."
                    },
                    {
                      "name":"Jessica Silva",
                      "education":"B.S., M.S.",
                      "major":"Computer Science",
                      "position":"Former Undergraduate Research Volunteer",
                      "email":"jsilv039@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/jessica-silva.png",
                      "description":"Former undergraduate research volunteer who majored in Computer Science."
                    },
                  ],
                  "BS":
                  [
                    {
                      "name":"Alain Galvan",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Engineer at Marmoset Toolbag (Former Undergraduate Research Assistant)",
                      "email":"agalv023@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/alain-galvan.jpg",
                      "description":"Alain Galvan was a researcher focused on graphics programming, procedurally generated environments, and making tools for artists/musicians. He's been awarded in MLH Hackathons, Newgrounds, Codepen, among other venues."
                    },
                    {
                      "name":"Lukas Borges",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Engineer at Marmoset Toolbag (Former Undergraduate Research Assistant)",
                      "email":"lborg019@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/lukas-borges.jpg",
                      "description":"Lukas is a former undergraduate student who focused on Augmented Reality and Game Development in Unity."
                    },
                    {
                      "name":"Jason Lee Thomas",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Senior Engineer at Citrix (Former Undergraduate Research Assistant)",
                      "email":"jasthoma@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/jason-lee-thomas.jpg",
                      "description":"Jason Lee Thomas was an undergraduate research assistant, who focused on low end C++ programming for the OpenHID Framework (TAMGeF)."
                    },
                    {
                      "name":"Jonathan Bernal",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Embeded Software Engineer at BioBrace (Former Undergraduate Gesture Research Assistant)",
                      "email":"jbern102@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/jonathan-bernal.jpg",
                      "description":"Jonathan F. Bernal was an undergraduate research assistant, currently conducting research on Human-computer Multimodal Interaction and Augmented and Mixed Reality. Jonathan was also part of the ARCH program of the FIU Honors College. His major hobbies are biking and drawing."
                    },
                    {
                      "name":"Luis Averhoff",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Former Undergraduate Assistant",
                      "email":"laver008@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/luis-averhoff.jpg",
                      "description":"Luis Averhoff was an undergraduate research assistant during fall 2017 until summer 2018."
                    },
                    {
                      "name":"Maia Obregon",
                      "education":"B.S.",
                      "major":"Psychology",
                      "position":"Undergraduate Research Volunteer",
                      "email":"mzock001@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/maia-obregon.png",
                      "description":"Maia Obregon was an undergraduate research volunteer currently pursuing a Masters Degree."
                    },
                    {
                      "name":"Pablo Mueller",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Software Engineer at JP Morgan Chase (Former Undergraduate Research Assistant)",
                      "email":"pmuel001@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/pablo-mueller.jpg",
                      "description":"Pablo Mueller was an undergraduate research assistant who focused on gesture recognition."
                    },
                    {
                      "name":"Andy Pujol",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Jr. Web Developer at Carnival Cruises (Former Undergraduate Research Assistant)",
                      "email":"apujo010@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/andy-pujol.jpg",
                      "description":"Andy Pujol was an undergraduate research assistant who worked on Web Development."
                    },
                    {
                      "name":"Joseph Medina",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Automation Engineer at Accelirate Inc. (Former Undergraduate Research Assistant)",
                      "email":"jmedi145@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/joseph-medina.jpg",
                      "description":"Former undergraduate research assistant who majored in Computer Science."
                    },
                    {
                      "name":"Ciana Rogers",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Former Undergraduate Research Assistant",
                      "email":"ciana.rogers@gmail.com",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/ciana-rogers.png",
                      "description":"Former undergraduate research assistant who majored in Computer Science."
                    },
                    {
                      "name":"Vanesa Perez",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Former Undergraduate Research Assistant",
                      "email":"vpere159@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/vanesa-perez.png",
                      "description":"Former undergraduate research assistant who majored in Computer Science."
                    },
                    {
                      "name":"Santiago Bolivar",
                      "education":"B.S.",
                      "major":"Computer Science",
                      "position":"Director of Creative Technologies at Dan Marino Foundation (Former Undergraduate Research Assistant)",
                      "email":"sboli001@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/santiago-bolivar.jpg",
                      "description":"Santiago Bolivar was an undergraduate research assistant who researched on the impact of Computer Science to interest minorities on pursuing the major."
                    },
                    {
                      "name":"Edilmary Urdaneta",
                      "education":"B.A.",
                      "major":"Chemistry",
                      "position":"Former Undergraduate Research Assistant",
                      "email":"eurda010@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"http://pwrlab.fiu.edu/members/",
                      "image":"assets/images/people/eldimary-urdaneta.png",
                      "description":"Former undergraduate research assistant who majored in Chemistry and minored in Biology."
                    }
                    
                    
                  ],
                  
                }
              }
        );
    }
  }

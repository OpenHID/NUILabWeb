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
                      "education":"Ph. D.",
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Visiting Assistant Professor & Director of NUILab",
                      "email":"fortega@colostate.edu",
                      "university": "Colorado State University (Denver, CO)",
                      "cv":"http://openhid.com/fortega/cv.pdf",
                      "website":"website",
                      "image":"assets/images/people/francisco-ortega.jpg",
                      "description":"<p>Dr. Francisco R. Ortega is an Assistant Professor at Colorado State University. Dr. Ortega earned his Ph.D. in Computer Science (CS) in the field of Human-Computer Interaction (HCI) and 3D User Interfaces (3DUI) from Florida International University (FIU). He also hold a position of Post-Doc and Visiting Assistant Professor at FIU between February 2015 to July 2018. Broadly speaking, his research has focused on gesture interaction, which includes gesture recognition and elicitation. His main research area focuses on improving user interaction by (a) eliciting (hand and full-body) gesture sets by user elicitation, and (b) developing interactive gesture-recognition algorithms. His secondary research aims to discover how to increase interest for CS in non-CS entry-level college students via virtual and augmented reality games. His research has resulted in multiple peer-reviewed publications in venues such as ACM ISS, ACM SUI, and IEEE 3DUI, among others. He is the first-author of Interaction Design for 3D User Interfaces: The World of Modern Input Devices for Research, Applications, and Game Development book by CRC Press. Dr. Ortega serves as Vertically Integrated Projects coordinator that promotes applied research for undergraduate students across disciplines.<\/p> <p>Dr. Ortega is committed to teaching and integrating research in the classroom. He has taught multiple courses including CS capstone, Programming II (Java), Programming III (C), Operating Systems, Principles of Relational Database Management Systems (graduate), Network Management and Control Standards (graduate), Net-Centric (using Python), Web Application Programming, Website Management, and Construction, Windows Programming (C#), Digital Forensics, Advanced Digital Forensics (graduate), Advanced Ethical Hacking (graduate), and Practical Applied Security (graduate).<\/p>"
                    }
                  ]
                },
                "Current":
                {
                  "PHD":
                    {
                     
                    },
                  "MDS":
                  [
                    {
                      "name":"Fernando de Zayas",
                      "education":"B.S.,M.S.",
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Graduate Research Assistant",
                      "email":"TBA",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/openhid-logo.png",
                      "description":"Graduate research assistant."
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
                      "name":"Santiago Bolivar",
                      "education":"B.S.",
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Undergraduate Research Assistant",
                      "email":"sboli001@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/openhid-logo.png",
                      "description":"Santiago Bolivar is an undergraduate volunteer researching about the impact of Computer Science to interest minorities on persuing the major."
                    },
                    {
                      "name":"Cristina Villarroel",
                      "education":"B.S.",
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Undergraduate Research Volunteer",
                      "email":"cvill141@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/cristina-villarroel.jpg",
                      "description":"Cristina Villarroel is an undergraduate volunteer collaborating with OpenHID research."
                    },
                    {
                      "name":"Pablo Mueller",
                      "education":"B.S.",
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Undergraduate Research Volunteer",
                      "email":"pmuel001@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/pablo-mueller.jpg",
                      "description":"Pablo Mueller is an undergraduate volunteer researching gesture recognition."
                    },
                    {
                      "name":"Joseph Medina",
                      "education":"B.S.",
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Undergraduate Volunteer Assistant",
                      "email":"TBA",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/openhid-logo.png",
                      "description":"Undergraduate research volunteer majoring Computer Science."
                    },
                    {
                      "name":"Catherine Angelini",
                      "education":"B.S.",
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Undergraduate Volunteer Assistant",
                      "email":"TBA",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/openhid-logo.png",
                      "description":"Undergraduate research volunteer majoring Computer Science."
                    },
                    {
                      "name":"Andy Pujol",
                      "education":"B.S.",
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Undergraduate Research Assistant",
                      "email":"apujo010@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/andy_pujol.JPG",
                      "description":"Undergraduate research volunteer majoring Computer Science."
                    },
                    {
                      "name":"Jason Garcia",
                      "education":"B.S.",
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Undergraduate Volunteer Assistant",
                      "email":"TBA",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/openhid-logo.png",
                      "description":"Undergraduate research volunteer majoring Computer Science."
                    },
                    {
                      "name":"Ciana Rogers",
                      "education":"B.S.",
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Undergraduate Volunteer Assistant",
                      "email":"TBA",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/openhid-logo.png",
                      "description":"Undergraduate research volunteer majoring Computer Science."
                    },
                    {
                      "name":"Fidel Hernandez",
                      "education":"B.S.",
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Undergraduate Volunteer Assistant",
                      "email":"TBA",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/openhid-logo.png",
                      "description":"Undergraduate research volunteer majoring Computer Science."
                    },
                    {
                      "name":"Arelys Alvarez",
                      "education":"B.S.",
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Undergraduate Volunteer Assistant",
                      "email":"TBA",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/arelys-alvarez.jpg",
                      "description":"Undergraduate research volunteer majoring Computer Science."
                    },
                    {
                      "name":"Vanesa Perez",
                      "education":"B.S.",
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Undergraduate Volunteer Assistant",
                      "email":"TBA",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/openhid-logo.png",
                      "description":"Undergraduate research volunteer majoring Computer Science."
                    },
                    {
                      "name":"Edilmary Urdaneta",
                      "education":"B.S.",
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Undergraduate Volunteer Assistant",
                      "email":"eurda010@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/openhid-logo.png",
                      "description":"Undergraduate research volunteer majoring Computer Science."
                    },
                    {
                      "name":"Maia Obregon",
                      "education":"B.S.",
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Undergraduate Volunteer Assistant",
                      "email":"mzock001@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/openhid-logo.png",
                      "description":"Undergraduate research volunteer majoring Computer Science."
                    },
                    {
                      "name":"Jessica Silva",
                      "education":"B.S.",
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Undergraduate Volunteer Assistant",
                      "email":"jsilv039@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/openhid-logo.png",
                      "description":"Undergraduate research volunteer majoring Computer Science."
                    }
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
                      "universtiy":"Florida International Universty",
                      "major":"Statistics",
                      "position":"Graduate Research Assistant",
                      "email":"ktarr007@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/katherine-tarre.jpg",
                      "description":"Katherine Tarre is an undergraduate research assistant majoring in Statistics and International Relations. Her work is primarily focused on experimental design and statistical analysis using various computer software. In her free time she enjoys reading and problem solving. Katherine Tarre is an undergraduate research assistant majoring in Statistics and International Relations. Her work is primarily focused on experimental design and statistical analysis using various computer software. In her free time she enjoys reading and problem solving."
                    },
                    {
                      "name":"Ruben Balcazar",
                      "education":"B.S.,M.S.",
                      "universtiy":"Florida International Universty",
                      "major":"Biology, Computer Science",
                      "position":"Engineer at Ultimate Software (Former Graduate Research Assistant)",
                      "email":"rbalc001@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/ruben-balcazar.jpg",
                      "description":"Ruben Balcazar was a graduate research assistant for the OpenHID Lab. His contributions include Unity plugins for OpenHID compliant hardware."
                    },
                    {
                      "name":"Jules Calella",
                      "education":"B.S.,M.S.",
                      "universtiy":"Florida International Universty",
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
                      "universtiy":"Florida International Universty",
                      "major":"Software Engineering, Computer Engineering",
                      "position":"Former graduate Research Assistant",
                      "email":"mkres006@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/mathew-kress.jpg",
                      "description":"Mathew Kress is a graduate volunteer working on applications with the HTC Vive and Hololens."
                    }
                  ],
                  "BS":
                  [
                    {
                      "name":"Alain Galvan",
                      "education":"B.S.",
                      "universtiy":"Florida International Universty",
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
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Engineer at Marmoset Toolbag (Former Undergraduate Research Assistant)",
                      "email":"lborg019@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/lukas-borges.jpg",
                      "description":"Lukas is an undergraduate focused on Augmented Reality and Game Development in Unity."
                    },
                    {
                      "name":"Jason Lee Thomas",
                      "education":"B.S.",
                      "universtiy":"Florida International Universty",
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
                      "universtiy":"Florida International Universty",
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
                      "universtiy":"Florida International Universty",
                      "major":"Computer Science",
                      "position":"Former Undergraduate Assistant",
                      "email":"laver008@fiu.edu",
                      "university": "Florida International University (Miami, FL)",
                      "website":"website",
                      "image":"assets/images/people/openhid-logo.png",
                      "description":"Luis Averhoff was an undergraduate research assistant during fall 2017 until summer 2018."
                    }
                  ]
                }
              }
        );
    }

}
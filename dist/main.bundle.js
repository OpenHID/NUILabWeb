webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    max-width: 800px;\n    /* margin: auto; */\n    text-align: center;\n    padding: 10px;\n}\n\n.name {\n    color: black;\n    font-size: 18px;\n}\n\n.title {\n    color: grey;\n    font-size: 14px;\n}\n\nbutton {\n    border: none;\n    outline: 0;\n    display: inline-block;\n    padding: 8px;\n    color: white;\n    background-color: #000;\n    text-align: center;\n    cursor: pointer;\n    width: 100%;\n    font-size: 18px;\n}\n\na {\n    text-decoration: none;\n    font-size: 22px;\n    color: black;\n}\n\nbutton:hover, a:hover {\n    opacity: 0.7;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <!-- Header Group photo -->\n    <div style=\"background: url('/assets/images/people/header_photo.jpg'); width: 100%; height: 280px; background-size: cover; background-position: 50% 25%;\"></div>\n    \n    <div class=\"table\">\n        <!-- WHO WE ARE DIV -->    \n        <div class=\"row\" style=\"padding:16px;\">\n            <div class=\"col-md-4\" style=\"text-align:center\">\n                <img src=\"assets/images/general/map.svg\" style=\"width: 70%; max-height: 240px;\">\n            </div>\n            <div class=\"col-md-8\">\n                <br>\n                <h5>Who are We?</h5>\n                <p>We're a group of professors &amp; student researchers from the US, Peru, Cuba, China, Jamaica, Brazil, The Dominican Republic, and Colombia. When we're not working on papers we're competing in MLH Hackathons, exercising, and playing/making PC Games and Apps.</p>\n            </div>\n        </div>\n        <!-- Faculty title -->\n        <div class=\"row\" style=\"height:70px\">\n            <div class=\"col-md-12\" style=\"text-align:center\">\n                <h2>Faculty</h2>\n            </div>\n        </div>\n        <!-- TODO Add people to database -->\n        <!-- TODO Add padding to images for better responsive -->\n        <!-- TODO add santiago Bolivar -->\n        <!-- Francisco Ortega CV -->\n        <!-- <div *ngFor=\"let boss of bosses\" class=\"row\" style=\"padding:20px;\"> -->\n        <div class=\"row\" style=\"padding:20px;\">\n            <div class=\"col-md-2\" style=\"text-align:center;\">\n                <img src=\"assets/images/people/francisco-ortega.jpg\" style=\"width: 70%; max-height: 200px; max-width: 200px;\">\n            </div>\n            <div class=\"col-md-10\">\n                <div class=\"row\">\n                    <div class=\"col-md-10\">\n                        <h3>Francisco R. Ortega, Ph. D.</h3>\n                        <h5>Visiting Assistant Professor &amp; Director of OpenHID Lab</h5>\n                        <p>fortega@cs.fiu.edu</p>\n                    </div>\n                    <!-- TODO add resume link -->\n                    <div class=\"col-md-2\">\n                        <a href=\"http://openhid.com/fortega/cv.pdf\"><h5>CV</h5></a>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p>Dr. Francisco R. Ortega (), Visiting Assistant Professor, received his Ph.D. in Computer Science from Florida International University (FIU) in 2014, co-advised by Dr. Naphtali Rishe and Dr. Armando Barreto. He received outstanding graduate student 2014 from Computer Science. His dissertation was one of five nominated for best dissertation award for the college of engineering. Dr. Ortega received his bachelor’s degree in Computer Science, cum laude, in December 2008 from FIU and a master’s degree in Computer Science from FIU in December 2009. Dr. Ortega has over 17 years of experience in software development and systems integration. His area of expertise are in 3D User Interfaces, Input Interfaces, Human-Computer Interaction, 3D navigation, input modeling, multi-threaded programming for 3D User Interfaces, and framework development, among others. Dr. Ortega has 22 publications, with many of them as first author. He is the also the first author of the book Interaction Design for 3D User Interfaces to be published by CRC Press/Taylor and Francis Group in January, 2016.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Francisco Ortega -->\n\n        <br>\n        <!-- Student title -->\n        <div class=\"row\" style=\"height:70px\">\n            <div class=\"col-md-12\" style=\"text-align:center\">\n                <h2>Students</h2>\n            </div>\n        </div>\n\n        <!-- Jules Calella CV -->\n        <div class=\"row\" style=\"min-height: 160px; padding:20px;\">\n            <div class=\"col-md-2\" style=\"text-align:center\">\n                <img src=\"assets/images/people/jules-calella.jpg\" style=\"width: 70%; max-height: 200px; max-width: 200px;\">\n            </div>\n            <div class=\"col-md-10\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <h3>Jules Calella</h3>\n                        <p>jcale004@fiu.edu</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p>Jules Calella is a graduate research assistant. He has a primary interest is in electronics, with a focus in communications and digital electronics.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Jules Calella -->\n\n        <!-- Katherine Tarre CV -->\n        <div class=\"row\" style=\"min-height: 160px;padding:20px;\">\n            <div class=\"col-md-2\" style=\"text-align:center\">\n                <img src=\"assets/images/people/katherine-tarre.jpg\" style=\"width: 70%; max-height: 200px; max-width: 200px;\">\n            </div>\n            <div class=\"col-md-10\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <h3>Katherine Tarre</h3>\n                        <p>ktarr007@fiu.edu</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p>Katherine Tarre is an undergraduate research assistant majoring in Statistics and International Relations. Her work is primarily focused on experimental design and statistical analysis using various computer software. In her free time she enjoys reading and problem solving.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Katherine Tarre -->\n\n        <!-- Lukas Borges CV -->\n        <div class=\"row\" style=\"min-height: 160px;padding:20px;\">\n            <div class=\"col-md-2\" style=\"text-align:center\">\n                <img src=\"assets/images/people/lukas-borges.jpg\" style=\"width: 70%; max-height: 200px; max-width: 200px;\">\n            </div>\n            <div class=\"col-md-10\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <h3>Lukas Borges</h3>\n                        <p>lborg019@fiu.edu</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p>Lukas is an undergraduate focused on Augmented Reality and Game Development in Unity.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Lukas Borges -->\n\n        <!-- Seidan Jamides CV -->\n        <div class=\"row\" style=\"min-height: 160px;padding:20px;\">\n            <div class=\"col-md-2\" style=\"text-align:center\">\n                <img src=\"assets/images/people/seidan-jamides.jpg\" style=\"width: 70%; max-height: 200px; max-width: 200px;\">\n            </div>\n            <div class=\"col-md-10\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <h3>Seidan Jamides</h3>\n                        <p>sjami006@fiu.edu</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p>Seidan Jamides is an undergraduate research assistant majoring Computer Science. He is currently performing research in gesture elicitation.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Seidan Jamides -->\n\n        <!-- Mathew Kress CV -->\n        <div class=\"row\" style=\"min-height: 160px;padding:20px;\">\n            <div class=\"col-md-2\" style=\"text-align:center\">\n                <img src=\"assets/images/people/openhid-logo.png\" style=\"width: 70%; max-height: 200px; max-width: 200px;\">\n            </div>\n            <div class=\"col-md-10\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <h3>Mathew Kress</h3>\n                        <p>mkres000@fiu.edu</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p>Mathew Kress is a graduate volunteer working on applications with the HTC Vive and Hololens.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Mathew Kress -->\n\n        <!-- Cristina Villarroel CV -->\n        <div class=\"row\" style=\"min-height: 160px;padding:20px;\">\n            <div class=\"col-md-2\" style=\"text-align:center\">\n                <img src=\"assets/images/people/cristina-villarroel.jpg\" style=\"width: 70%; max-height: 200px; max-width: 200px;\">\n            </div>\n            <div class=\"col-md-10\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <h3>Cristina Villarroel</h3>\n                        <p>cvill141@fiu.edu</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p>Cristina Villarroel is an undergraduate volunteer collaborating with OpenHID research.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Cristina Villarroel -->\n\n        <!-- Pablo Mueller CV -->\n        <div class=\"row\" style=\"min-height: 160px;padding:20px;\">\n            <div class=\"col-md-2\" style=\"text-align:center\">\n                <img src=\"assets/images/people/pablo-mueller.jpg\" style=\"width: 70%; max-height: 200px; max-width: 200px;\">\n            </div>\n            <div class=\"col-md-10\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <h3>Pablo Mueller</h3>\n                        <p>pmuel001@fiu.edu</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p>Pablo Mueller is an undergraduate volunteer researching gesture recognition.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Pablo Mueller -->\n\n        <!-- Santiago Bolivar CV -->\n        <div class=\"row\" style=\"min-height: 160px;padding:20px;\">\n            <div class=\"col-md-2\" style=\"text-align:center\">\n                <img src=\"assets/images/people/openhid-logo.png\" style=\"width: 70%; max-height: 200px; max-width: 200px;\">\n            </div>\n            <div class=\"col-md-10\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <h3>Santiago Bolivar</h3>\n                        <p>sboli001@fiu.edu</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p>Santiago Bolivar is an undergraduate volunteer researching about the impact of Computer Science to interest minorities on persuin the major.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Pablo Mueller -->\n        <br>\n        <!-- Former Student title -->\n        <div class=\"row\" style=\"height:70px\">\n            <div class=\"col-md-12\" style=\"text-align:center\">\n                <h2>Former Students</h2>\n            </div>\n        </div>\n\n        <!-- Alain Galvan CV -->\n        <div class=\"row\" style=\"min-height: 160px;padding:20px;\">\n            <div class=\"col-md-2\" style=\"text-align:center\">\n                <img src=\"assets/images/people/alain-galvan.jpg\" style=\"width: 70%; max-height: 200px; max-width: 200px;\">\n            </div>\n            <div class=\"col-md-10\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <h3>Alain Galvan</h3>\n                        <h5>Engineer at Marmoset Toolbag</h5>\n                        <p>agalv023@fiu.edu</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p>Alain Galvan was a researcher focused on graphics programming, procedurally generated environments, and making tools for artists/musicians. He's been awarded in MLH Hackathons, Newgrounds, Codepen, among other venues. </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Alain Galvan -->\n\n        <!-- Jason Lee Thomas CV -->\n        <div class=\"row\" style=\"min-height: 160px;padding:20px;\">\n            <div class=\"col-md-2\" style=\"text-align:center\">\n                <img src=\"assets/images/people/jason-lee-thomas.jpg\" style=\"width: 70%; max-height: 200px; max-width: 200px;\">\n            </div>\n            <div class=\"col-md-10\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <h3>Jason Lee Thomas</h3>\n                        <h5>Senior Engineer at Citrix</h5>\n                        <p>jasthoma@fiu.edu</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p>Jason Lee Thomas was an undergraduate research assistant, who focused on low end C++ programming for the OpenHID Framework (TAMGeF).</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Jason Lee Thomas -->\n\n        <!-- Ruben Balcazar CV -->\n        <div class=\"row\" style=\"min-height: 160px;padding:20px;\">\n            <div class=\"col-md-2\" style=\"text-align:center\">\n                <img src=\"assets/images/people/ruben-balcazar.jpg\" style=\"width: 70%; max-height: 200px; max-width: 200px;\">\n            </div>\n            <div class=\"col-md-10\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <h3>Ruben Balcazar</h3>\n                        <h5>Engineer at Ultimate Software</h5>\n                        <p>rbalc001@fiu.edu</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p>Ruben Balcazar was a graduate research assistant for the OpenHID Lab. His contributions include Unity plugins for OpenHID compliant hardware.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Ruben Balcazar -->\n\n        <!-- Jonathan Bernal CV -->\n        <div class=\"row\" style=\"min-height: 160px;padding:20px;\">\n            <div class=\"col-md-2\" style=\"text-align:center\">\n                <img src=\"assets/images/people/jonathan-bernal.jpg\" style=\"width: 70%; max-height: 200px; max-width: 200px;\">\n            </div>\n            <div class=\"col-md-10\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <h3>Jonathan Bernal</h3>\n                        <h5>Former Undergraduate Gesture Research Assistant</h5>\n                        <p>jbern102@fiu.edu</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <p>Jonathan F. Bernal was an undergraduate research assistant, currently conducting research on Human-computer Multimodal Interaction and Augmented and Mixed Reality. Jonathan was also part of the ARCH program of the FIU Honors College. His major hobbies are biking and drawing.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- End Jonathan Bernal -->\n\n    </div>\n</div>\n<!-- <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <img src=\"assets/images/people/francisco-ortega.jpg\">\n                <br>\n                <div style=\"align-items: center;\">\n                <h4>Dr. Francisco Ortega</h4>\n                </div>\n                <div id=\"demo\" class=\"collapse\">\n                        <p class=\"title\">Dr. Francisco R. Ortega (), Visiting Assistant Professor, received his Ph.D. in Computer Science from Florida International University (FIU) in 2014, co-advised by Dr. Naphtali Rishe and Dr. Armando Barreto. He received outstanding graduate student 2014 from Computer Science. His dissertation was one of five nominated for best dissertation award for the college of engineering. Dr. Ortega received his bachelor’s degree in Computer Science, cum laude, in December 2008 from FIU and a master’s degree in Computer Science from FIU in December 2009. Dr. Ortega has over 17 years of experience in software development and systems integration. His area of expertise are in 3D User Interfaces, Input Interfaces, Human-Computer Interaction, 3D navigation, input modeling, multi-threaded programming for 3D User Interfaces, and framework development, among others. Dr. Ortega has 22 publications, with many of them as first author. He is the also the first author of the book Interaction Design for 3D User Interfaces to be published by CRC Press/Taylor and Francis Group in January, 2016.</p>\n                </div> \n                <button data-toggle=\"collapse\" data-target=\"#demo\">Information</button>\n                <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\n                <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n                <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n                <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n            </div>\n        </div>\n    </div>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(_globals) {
        this._globals = _globals;
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__publications_publications_component__ = __webpack_require__("../../../../../src/app/publications/publications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resources_resources_component__ = __webpack_require__("../../../../../src/app/resources/resources.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Website main pages components






var routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'About', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'Contact', component: __WEBPACK_IMPORTED_MODULE_3__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: 'Projects', component: __WEBPACK_IMPORTED_MODULE_5__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'Publications', component: __WEBPACK_IMPORTED_MODULE_6__publications_publications_component__["a" /* PublicationsComponent */] },
    { path: 'Resources', component: __WEBPACK_IMPORTED_MODULE_7__resources_resources_component__["a" /* ResourcesComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    border: 1px solid #e7e7e7;\n    background-color: #f3f3f3;\n}\n\nli {\n    float: left;\n}\n\nli a {\n    display: block;\n    color: #666;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover:not(.active) {\n    background-color: #ddd;\n}\n\nli a.active {\n    color: white;\n    background-color: #4CAF50;\n}\n\n.footer {\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(34, 34, 34, 0.75)), color-stop(25%, rgba(34, 34, 34, 0))) #081e3f;\n    background: linear-gradient(rgba(34, 34, 34, 0.75) 0%, rgba(34, 34, 34, 0) 25%) #081e3f;\n    padding: 3em 1.618em;\n    width: 100%;\n    text-align: center; }\n\n.footer hr {\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    margin: 0 auto 1.5em;\n    width: 12em; \n}\n\n.footer p {\n    color: rgba(255, 255, 255, 0.4);\n    font-size: 0.9em;\n    line-height: 1.5em;\n    margin: auto;\n    max-width: 35em; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- NAVBAR STARTS -->\n<div class=\"container\">\n  <ul>\n    <li><a class=\"active\" routerLink=\"/Home\">Home</a></li>\n    <li><a routerLink=\"/About\">About Us</a></li>\n    <li><a routerLink=\"/Projects\">Projects</a></li>\n    <li><a routerLink=\"/Contact\">Contact</a></li>\n    <li><a routerLink=\"/Publications\">Publications</a></li>\n    <li><a href=\"http://3dinputbook.com/\">Books</a></li>\n    <li><a routerLink=\"/Resources\">Resources</a></li>\n    <li><a href=\"https://users.cs.fiu.edu/~fortega/\">Teaching</a></li>\n  </ul>\n</div>\n<!-- NAVBAR ENDS -->\n\n<!--START EACH PAGE CONTENT -->\n<router-outlet></router-outlet>\n<!-- END EACH PAGE CONTENT -->\n\n<!-- START FOOTER -->\n<div>\n    <footer class=\"footer\"><a href=\"http://cis.fiu.edu/\"><img src=\"/assets/images/general/fiu-cis-logo.png\" alt=\"Logo image\" style=\"width: 240px\"></a>\n      <hr>\n      <p>The {{_globals.LabShort }} lab is a member of the <br><a href=\"http://hpdrc.fiu.edu/\">{{_globals.UniversityShort }}'s College of Computing Sciences</a></p>\n    </footer>\n</div>\n<!-- END FOOTER -->\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_globals) {
        this._globals = _globals;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__publications_publications_component__ = __webpack_require__("../../../../../src/app/publications/publications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__resources_resources_component__ = __webpack_require__("../../../../../src/app/resources/resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__publications_publication_service__ = __webpack_require__("../../../../../src/app/publications/publication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Routing Module to redirect pages

// Site Components








//Global variables

// Google Maps API

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__publications_publications_component__["a" /* PublicationsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__resources_resources_component__["a" /* ResourcesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: ' AIzaSyDZAsRcQHusi9gsviGBonQeststp3PQgDc '
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__publications_publication_service__["a" /* PublicationService */],
                __WEBPACK_IMPORTED_MODULE_12__globals__["a" /* Globals */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n    height: 400px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Map here -->\n<!-- Key:  AIzaSyDZAsRcQHusi9gsviGBonQeststp3PQgDc   -->\n<div class=\"container\">\n    <div class=\"table\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h1>Contact Us</h1>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n\n                </agm-map>\n            </div>\n        </div>\n    </div>    \n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = (function () {
    function Globals() {
        this.UniversityShort = 'CSU';
        this.LabShort = 'NUI';
        this.LabLong = 'Natural User Interaction';
        this.LabOldShort = 'OpenHID';
        this.LabOldLong = 'Open Human Interaction Design';
    }
    Globals = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html {\n    height: 100%;\n}\n\n/* The hero image */\n\n.hero-image {\n    /* The image used */\n    background-image: url(\"/../../assets/images/codevr-preview.png\");\n    /* /home/stonb/Workspace/openhid/src/assets/images/background.jpg */\n\n    /* Set a specific height */\n    height: 50%;\n\n    /* Position and center the image to scale nicely on all screens */\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n}\n\n/* Place text in the middle of the image */\n\n.hero-text {\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    color: white;\n}\n\n.fullscreen-video {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    min-width: 100%;\n    min-height: 100%;\n    width: auto;\n    height: auto;\n    z-index: -100;\n    -webkit-transform: translateX(-50%) translateY(-50%);\n            transform: translateX(-50%) translateY(-50%); }\n\n.openhid-logo {\n    display: block;\n    margin: 32px 0 16px 0;\n    min-width: 240px;\n    min-height: 200px;\n    z-index: 10;\n    background: url(\"/assets/images/general/openhid-logo.png\") no-repeat scroll center center/contain; }\n\n.spin {\n    -webkit-animation: spin 2.5s ease 0s forwards;\n            animation: spin 2.5s ease 0s forwards; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <!-- Header -->\n    <div class=\"table\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"hero\">\n                    <div class=\"openhid-logo spin\"></div>\n                    <h1><b style=\"font-weight: 800\">{{ _globals.LabShort }}</b> Lab</h1>\n                    <h2><a href=\"http://www.cs.colostate.edu/cstop/\">CSU's </a>{{ _globals.LabLong }} Lab</h2>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <!-- Content -->\n    <div>\n        <div class=\"table\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <img src=\"assets/images/general/proom.png\" style=\"max-width: 100%; max-height: 100%;\">\n                </div>\n                <div class=\"col-md-8\">\n                    <article>\n                        <h6>What is the {{ _globals.LabShort }} Lab?</h6>\n                        <p>{{ _globals.LabShort }} Lab, (Formerly known as {{ _globals.LabOldShort }}), founded in January 2015, is dedicated to the research and development of 3D User Interfaces, Virtual Environments, 3D Navigation, Visualization Systems, Gesture Recognition, Modern Framework Development, and Input Devices, among other research interest we have. In general, we concentrate in looking at user interaction techniques and the advancement of Human-Computer Interaction.</p>\n                        <p>{{ _globals.LabShort }} Lab is part of a larger center, HPDRC, located at Florida International University in the School of Computing and Information Sciences. The lab founder and director is Francisco R. Ortega, Ph.D.</p>\n                    </article>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(_globals) {
        this._globals = _globals;
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n    max-width: 100%;\n    max-height: 100%;\n    vertical-align: middle;\n}\n\n.portrait {\n    height: 80px;\n    width: 30px;\n}\n\n.landscape {\n    height: 30px;\n    width: 80px;\n}\n\n.square {\n    height: 75px;\n    width: 75px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Projects Container -->\n<div class=\"container\">\n    <div class=\"table\">\n        <!-- START CirGR Project -->\n        <div class=\"row\" style=\"background-color: rgba(235,235,235, 0.9); padding:20px\">\n            <div class=\"col-md-4 .portrait\">\n                <img src=\"assets/images/general/circgr-preview.png\">\n            </div>\n            <div class=\"col-md-8\">\n                <h2>CircGR: Multi-touch Gesture Recognition</h2>\n                <h4><b>Complete</b></h4>\n                <h6>OpenHID Lab, HPDRC, among others</h6>\n                <h6><b>Balcazar, R., Ortega, F., Tarre, K., Barreto, A., Weiss, M., Rishe, N.</b></h6>\n                <p>CircGR is a multi-touch non-symbolic gesture recognition algorithm, which utilizes circular statistic measures to implement linearithmic (O(n log n)) template-based matching. CircGR provides a solution to gesture designers, which allows for building complex multi-touch gestures with high- confidence accuracy. We demonstrated the algorithm and described a user study with 60 subjects and over 12,000 gestures collected for an original gesture set of 36. The accuracy is over 99% with the Matthews correlation coefficient of 0.95. In addition, early gesture detection was successful in CircGR as well.</p>\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://circgr.com\">Website</a>\n            </div>\n        </div>\n        <!-- END CirGR Project -->\n        <br>\n        <!-- START CodeVR Project -->\n        <div class=\"row\" style=\"padding:20px\">\n            <div class=\"col-md-4 .portrait\">\n                <img src=\"assets/images/general/codevr-preview.png\">\n            </div>\n            <div class=\"col-md-8\">\n                <h2>CodeVR</h2>\n                <h4><b>In Progress</b></h4>\n                <h6>OpenHID Lab, HPDRC, among others</h6>\n                <h6><b>Ortega, Rishe, Galvan, Borges</b></h6>\n                <p>This project seeks to improve Computer Science education using virtual reality for computer science students.</p>\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"https://github.com/openhid/code-vr\">Github</a>            \n            </div>\n        </div>\n        <!-- END CodeVR Project -->\n        <br>\n        <!-- START Multimodal Project -->\n        <div class=\"row\" style=\"background-color: rgba(235,235,235, 0.9); padding:20px\">\n            <div class=\"col-md-4 .portrait\">\n                <img src=\"assets/images/general/abstract_bg2.jpg\">\n            </div>\n            <div class=\"col-md-8\">\n                <h2>Multimodal Gesture Recognition for Multi-touch and Pen</h2>\n                <h4><b>In Progress</b></h4>\n                <h6>OpenHID Lab, HPDRC, among others</h6>\n                <h6><b>Ortega, Rishe, Balcazar, Thomas, Galvan</b></h6>\n                <p>This project seeks to find minimal features for gesture recognition in a multimodal environment using multitouch and pen, while keeping the complexity of of the implementation aligned with the $ (dollar) family algorithms.</p>\n                <!-- <a class=\"btn btn-success\" style=\"padding:6px\" href=\"https://github.com/openhid/code-vr\">Github</a>             -->\n            </div>\n        </div>\n        <!-- END Multimodal Project -->\n        <br>\n        <!-- START VR Programming Project -->\n        <div class=\"row\" style=\"padding:20px\">\n            <div class=\"col-md-4 .portrait\">\n                <img width=\"300\" height=\"200\" src=\"assets/images/general/abstract_bg4.jpg\">\n            </div>\n            <div class=\"col-md-8\">\n                <h2>VR Programming Application</h2>\n                <h4><b>In Progress</b></h4>\n                <h6>OpenHID Lab, HPDRC, among others</h6>\n                <h6><b>Ortega, Rishe, Galvan</b></h6>\n                <p>A VR programming application for increasing the number of women and minorities in computer science. </p>\n                <!-- <a class=\"btn btn-success\" style=\"padding:6px\" href=\"https://github.com/openhid/code-vr\">Github</a>             -->\n            </div>\n        </div>\n        <!-- END VR Programming Project -->\n        <br>\n        <!-- START Procedural Skybox Project -->\n        <div class=\"row\" style=\"background-color: rgba(235,235,235, 0.9); padding:20px\">\n            <div class=\"col-md-4 .portrait\">\n                <img src=\"assets/images/general/abstract_bg2.jpg\">\n            </div>\n            <div class=\"col-md-8\">\n                <h2>Procedural Skybox Generation</h2>\n                <h4><b>Completed</b></h4>\n                <h6>OpenHID Lab, HPDRC, among others</h6>\n                <h6><b>Ortega, Rishe, Galvan</b></h6>\n                <p>An algorithm for efficiently generating a physically correct space skybox for use in real time rendering.</p>\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://ieeexplore.ieee.org/abstract/document/7893331/\">IEEE Xplore</a>\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://openhid.com/assets/papers/gesture_elicitation_for_3d_travel_via_multi-touch_and_mid-air_systems_for_procedurally_generated_pseudo-universe.pdf\">PDF</a>\n            </div>\n        </div>\n        <!-- END Procedural Skybox Project -->\n        <br>\n        <!-- START Gesture Elicitation Project -->\n        <div class=\"row\" style=\"padding:20px\">\n            <div class=\"col-md-4 .portrait\">\n                <img src=\"assets/images/general/abstract_bg4.jpg\">\n            </div>\n            <div class=\"col-md-8\">\n                <h2>Gesture Elicitation for 3D</h2>\n                <h4><b>Completed</b></h4>\n                <h6>OpenHID Lab, HPDRC, among others</h6>\n                <h6><b>(Hidden for Now)</b></h6>\n                <p>This atempts to elicit gestures from multitouch/vision based cameras to study different aspects of travel and wayfinding.</p>\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://ieeexplore.ieee.org/abstract/document/7893331/\">IEEE Xplore</a>\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://openhid.com/assets/papers/gesture_elicitation_for_3d_travel_via_multi-touch_and_mid-air_systems_for_procedurally_generated_pseudo-universe.pdf\">PDF</a>\n            </div>\n        </div>\n        <!-- END Gesture Elicitation Project -->\n        <br>\n        <!-- START 3D Navigation Project -->\n        <div class=\"row\" style=\"background-color: rgba(235,235,235, 0.9); padding:20px\">\n            <div class=\"col-md-4 .portrait\">\n                <img src=\"assets/images/general/abstract_bg2.jpg\">\n            </div>\n            <div class=\"col-md-8\">\n                <h2>3D Navigation (Using Multitouch Desktop Displays)</h2>\n                <h4><b>Completed</b></h4>\n                <h6>OpenHID Lab, HPDRC, among others</h6>\n                <h6><b>Ortega, Barreto, Rishe, Jennifer Fernadez, Christian Martinez, Jules Calella</b></h6>\n                <p>This atempts to elicit gestures from multitouch/vision based cameras to study different aspects of travel and wayfinding.</p>\n                <!-- <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://openhid.com/assets/papers/gesture_elicitation_for_3d_travel_via_multi-touch_and_mid-air_systems_for_procedurally_generated_pseudo-universe.pdf\">PDF</a> -->\n            </div>\n        </div>\n        <!-- END 3D Navigation Project -->\n        <br>\n        <!-- START Smart Learning Desk Project -->\n        <div class=\"row\" style=\"padding:20px\">\n            <div class=\"col-md-4 .portrait\">\n                <img src=\"assets/images/general/abstract_bg4.jpg\">\n            </div>\n            <div class=\"col-md-8\">\n                <h2>Smart Learning Desk</h2>\n                <h4><b>Completed</b></h4>\n                <h6>OpenHID Lab, HPDRC, among others</h6>\n                <h6><b>Ortega, Rishe, Emmanuel Norde, Bryan Rodriguez, Fernando Garcia, Juan Araguren, Galvan, Thomas, Balcazar</b></h6>\n                <p>The Smart Learning Desk is currently being developed to integrate vision and touch targeted for the advancement of K-12 and college education.</p>\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"https://sites.google.com/site/vrkelvar/vr2016\">Webpage</a>\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"https://docs.google.com/viewer?a=v&amp;amp;pid=sites&amp;amp;srcid=ZGVmYXVsdGRvbWFpbnx2cmtlbHZhcnxneDoxZWUyMTc0YjgwNDZkYjQ4\">Google Docs</a>\n            </div>\n        </div>\n        <!-- END Smart Learning Desk Project -->\n        <br>\n        <!-- TAMGeF Project -->\n        <div class=\"row\" style=\"background-color: rgba(235,235,235, 0.9); padding:20px\">\n            <div class=\"col-md-4 .portrait\">\n                <img src=\"assets/images/general/abstract_bg2.jpg\">\n            </div>\n            <div class=\"col-md-8\">\n                <h2>TAMGeF: Touch, midAir, and Motion Gesture Framework</h2>\n                <h4><b>In Progress</b></h4>\n                <h6>OpenHID Lab, HPDRC, among others</h6>\n                <h6><b>Ortega, Rishe, Thomas, Balcazar, Galvan</b></h6>\n                <p>TAMGeF is a modern, parallel, template-based C++ API for multi-touch (and pen), mid-air (vision-based devices), and motion (e.g., gyroscope) devices with the purpose of recognizing multiple gestures.</p>\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"https://www.youtube.com/watch?v=PbSF8dhGgpA\"><i class=\"fa fa-youtube\"></i>YouTube</a>\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"https://dl.acm.org/citation.cfm?id=2794355\">ACM</a>\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://openhid.com/assets/papers/tamgef-_touch-midair-motion_framework_for_spatial_input.pdf\">PDF</a>\n            </div>\n        </div>\n        <!-- END TAMGeF Project -->\n        <br>\n        <!-- TAMGeF Project -->\n        <div class=\"row\" style=\"padding:20px\">\n            <div class=\"col-md-4 .portrait\">\n                <img src=\"assets/images/general/abstract_bg4.jpg\">\n            </div>\n            <div class=\"col-md-8\">\n                <h2>Spider Sensor</h2>\n                <h4><b>Completed</b></h4>\n                <h6>OpenHID Lab, HPDRC, Calella, mong others</h6>\n                <h6><b>Ortega, Barreto, Rishe</b></h6>\n                <p>The project covers the design of new hardware for motion sensing and the development of gesture algorithms for this type of sensor. </p>\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://ieeexplore.ieee.org/abstract/document/7808524/\">IEEE Xplore</a>\n                <a class=\"btn btn-success\" style=\"padding:6px\" href=\"http://openhid.com/assets/papers/handmagic-_towards_user_interaction_with_inertial_measuring_units.pdf\">ABC</a>\n            </div>\n        </div>\n        <!-- END TAMGeF Project -->\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'project',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/publications/publication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PublicationService = (function () {
    function PublicationService(_http) {
        var _this = this;
        this._http = _http;
        this.getPublications = function () {
            console.log("In getConfiguration of ConfigurationService");
            return _this._http.get('../assets/json/publications.json ').map(function (res) { return res.json(); });
        };
    }
    PublicationService.prototype.getPublication = function () {
        return ({
            "RefereedJournals": [
                {
                    "name": "<b>Ortega, F.<\/b>, Tarre, K., Rishe, N., and Barreto, A., \"3D Navigation for 6DOF Using Multi-Touch vs. GamePad\", under submission in International Journal of HumanComputer Studies, 2017.",
                    "links": []
                },
                {
                    "name": "Cofino J., Barreto A., Abyarjoo F., and <b>Ortega, F.<\/b>, \"Sonically-Enhanced Tabular Screen-Reading\", Journal on Technology & Persons with Disabilities (JTPD),Vol. 2, pp. 46–57, 2014.",
                    "links": [
                        { "from": "SOAR", "url": "http://scholarworks.csun.edu/handle/10211.3/133374" },
                        { "from": "PDF", "url": "assets/papers/sonically-enhanced_tabular_screen-reading.pdf" }
                    ]
                },
                {
                    "name": "Ren P., Barreto A., Huang J., Gao Y., <b>Ortega, F.<\/b>, and Adjouadi, M., \"Off-line and On-line Stress Detection through Processing of the Pupil Diameter Signal.\" In Annals of Biomedical Engineering, vol. 42, no. 1, pp. 162–176, 2014.",
                    "links": [
                        { "from": "SPRINGER", "url": "https://link.springer.com/article/10.1007/s10439-013-0880-9" },
                        { "from": "PDF", "url": "/assets/papers/off-line_and_on-line_stress_detection_through_processing_of_the_pupil_diameter_signal.pdf" }
                    ]
                }
            ],
            "RefereedConferences": [
                {
                    "name": "Balcazar, R., <b>Ortega, F.<\/b>, Tarre, K., Barreto, A., Weiss, M., Rishe, N., \"CircGR : Real-Time Multi-Touch Circular Gesture Recognition\", to appear in Proceedings of the 2017 ACM on Interactive Surfaces and Spaces (ISS ’17). Brighton, England.",
                    "links": []
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Galvan, A., Tarre, K., Barreto, A., Rishe, N., Bernal, J., Balcazar, R., and Thomas, J., \"Gesture Elicitation for 3D Travel via Multi-Touch and Mid-Air Systems for Procedurally Generated Pseudo-Universe.\" In 2017 IEEE Symposium on 3D User Interfaces (3DUI), Los Angeles, CA, 2017, pp 144–153.",
                    "links": [
                        { "from": "IEEE Xplore", "url": "https://link.springer.com/article/10.1007/s10439-013-0880-9" },
                        { "from": "PDF", "url": "assets/papers/off-line_and_on-line_stress_detection_through_processing_of_the_pupil_diameter_signal.pdf" }
                    ]
                },
                {
                    "name": "Tangnimitchok, S., O-Larnnithipong, N., Barreto, A.,<b>Ortega, F.<\/b> R., and Rishe, N. D., \"Finding an Efficient Threshold for Fixation Detection in Eye Gaze Tracking.\" In International Conference on Human-Computer Interaction, Interaction Platforms and Techniques of the series Lecture Notes in Computer Science- Volume 9732, pp. 93-103, Springer-Verlag New York, Inc., Jul. 2016. ",
                    "links": [
                        { "from": "SPRINGER", "url": "https://link.springer.com/chapter/10.1007/978-3-319-39516-6_9" },
                        { "from": "PDF", "url": "assets/papers/finding_an_efficient_threshold_for_fixation_detection_in_eye_gaze_tracking.pdf" }
                    ]
                },
                {
                    "name": "Abyarjoo, F., O-Larnnithipong, N., Tangnimitchok, S., Adjouadi, M., <b>Ortega, F.<\/b>, and Barreto, A., \"PostureMonitor: Real-Time IMU Wearable Technology to Foster Poise and Health.\" In International Conference of Design, User Experience, and Usability of the series Lecture Notes in Computer Science, vol. 9188, Springer International Publishing, pp 543–552, Aug. 2015.",
                    "links": [
                        { "from": "SPRINGER", "url": "https://link.springer.com/chapter/10.1007/978-3-319-20889-3_50" },
                        { "from": "PDF", "url": "assets/papers/posturemonitor-_real-time_imu_wearable_technology_to_foster_poise_and_health.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., Adjouadi, M., Abyarjoo, F., and O-Larnnithipong, N., \"GyroTouch: Wrist Gyroscope with a Multi-Touch Display.\" In International Conference on Human-Computer Interaction, Human-Computer Interaction: Interaction Technologies of the series Lecture Notes in Computer Science, vol. 9170, pp. 262–270, Springer International Publishing, Aug. 2015.",
                    "links": [
                        { "from": "SPRINGER", "url": "https://link.springer.com/chapter/10.1007/978-3-319-20916-6_25" },
                        { "from": "PDF", "url": "assets/papers/gyrotouch-_wrist_gyroscope_with_a_multi-touch_display.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., Adjouadi, M., and Abyarjoo, F., \"Multi-Touch Gesture Recognition Using Feature Extraction.\" In Innovations and Advances in Computing, Informatics, Systems Sciences, Networking and Engineering of the series Lecture Notes in Electrical Engineering, vol. 313, pp. 291–296, Springer International Publishing, 2015. ",
                    "links": [
                        { "from": "SPRINGER", "url": "https://link.springer.com/chapter/10.1007/978-3-319-06773-5_39" },
                        { "from": "PDF", "url": "assets/papers/multi-touch_gesture_recognition_using_feature_extraction.pdf" }
                    ]
                },
                {
                    "name": "Abyarjoo, F., Barreto, A., Cofino, J., and <b>Ortega, F.<\/b>, \"Implementing a Sensor Fusion Algorithm for 3D Orientation Detection with Inertial/Magnetic Sensors.\" In Innovations and Advances in Computing, Informatics, Systems Sciences, Networking and Engineering of the series Lecture Notes in Electrical Engineering, vol. 313, pp. 305–310, Springer International Publishing, 2015.",
                    "links": [
                        { "from": "SPRINGER", "url": "https://link.springer.com/chapter/10.1007/978-3-319-06773-5_41" },
                        { "from": "PDF", "url": "assets/papers/implementing_a_sensor_fusion_algorithm_for_3d_orientation_detection_with_inertial_magnetic_sensors.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Liu, S., Hernandez, F., Barreto, A., Rishe, N., and Adjouadi, M., \"PeNTa: Multi-Touch Modeling using Petri Nets.\" In International Conference on Human-Computer Interaction, Human-Computer Interaction: Theories, Methods, and Tools of the series Lecture Notes in Computer Science, HCI International 2014), vol 8510, pages 361–372. Springer International Publishing, June 2014.",
                    "links": []
                },
                {
                    "name": "Cofino, J., Barreto, A., Abyarjoo, F., and <b>Ortega, F.<\/b>, \"Sonifying HTML Tables for Audio-Spatially Enhanced Non-Visual Navigation.\" In IEEE SoutheastCon, 2013 Proceedings of IEEE, Jacksonville, FL, pp. 1–5, 2013.",
                    "links": [
                        { "from": "IEEE Xplore", "url": "http://ieeexplore.ieee.org/abstract/document/6567417/" },
                        { "from": "PDF", "url": "assets/papers/sonifying_html_tables_for_audio-spatially_enhanced_non-visual_navigation.pdf" }
                    ]
                },
                {
                    "name": "Abyarjoo, F., Barreto, A., Abyarjoo, S., <b>Ortega, F.<\/b>, and Cofino, J., \"Monitoring Human Wrist Rotation in Three Degrees of Freedom.\" In IEEE SoutheastCon, 2013 Proceedings of IEEE, Jacksonville, FL, pp. 1–5, 2013.",
                    "links": [
                        { "from": "IEEE Xplore", "url": "http://ieeexplore.ieee.org/abstract/document/6567517/" },
                        { "from": "PDF", "url": "assets/papers/monitoring_human_wrist_rotation_in_three_degrees_of_freedom.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., and Adjouadi, M., \"Interaction with 3D Environments Using Multi-Touch Screens.\" In Innovations and Advances in Computer, Information, Systems Sciences, and Engineering of the series Lecture Notes in Electrical Engineering, vol. 152, pp. 381–392, CISSE. Springer, New York, 2013.",
                    "links": [
                        { "from": "SPRINGER", "url": "https://link.springer.com/chapter/10.1007%2F978-1-4614-3535-8_33" },
                        { "from": "PDF", "url": "assets/papers/interaction_with_3d_environments_using_multi-touch_screens.pdf" }
                    ]
                },
                {
                    "name": "Wu, Y., Hernandez, F., <b>Ortega, F.<\/b>, Clarke, P., and France, R., \"Measuring the Effort for Creating and Using Domain-Specific Models.\" In Proceedings of the 10th Workshop on Domain-Specific Modeling (DSM ’10). ACM, New York, NY, USA, article 14, pages 6, 2010.",
                    "links": [
                        { "from": "ACM", "url": "https://dl.acm.org/citation.cfm?id=2060360" },
                        { "from": "PDF", "url": "assets/papers/measuring_the_effort_for_creating_and_using_domain-specific_models.pdf" }
                    ]
                },
                {
                    "name": "Verhoef, T., Lisetti, C., Barreto, A., <b>Ortega, F.<\/b>, Van der Zant, T., and Cnossen, F., \"Bio-sensing for Emotional Characterization without Word Labels.\" In Human-Computer Interaction. Ambient, Ubiquitous and Intelligent Interaction, 13th International Conference, HCI International. LNCS 5612, pp. 693–702, 2009.",
                    "links": [
                        { "from": "SPRINGER", "url": "https://link.springer.com/chapter/10.1007/978-3-642-02580-8_76" },
                        { "from": "PDF", "url": "assets/papers/bio-sensing_for_emotional_characterization_without_word_labels.pdf" }
                    ]
                }
            ],
            "Workshop": [
                {
                    "name": "<b>Ortega, F.<\/b>, Jamides, S., Barreto, A., and Rishe, N., \"The Tabletop is dead. Long Live the Tabletop!\", to appear in The Disappearing Tabletop: Social and Technical Challenges for Cross-Surface Collaboration workshop on Interactive Surfaces and Spaces (ISS ’17).",
                    "links": []
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Bolivar, S., Bernal, J., Galvan, A., Tarre, K., Rishe, N., and Barreto, A., Twards a 3D Virtual Programming Language to Increase the Number of Women in Computer Science Education.\" In 2017 IEEE Virtual Reality Workshop on K-12 Embodied Learning through Virtual &amp; Augmented Reality (KELVAR), Los Angeles, CA. pp. 1–6.",
                    "links": [
                        { "from": "IEEE Xplore", "url": "http://ieeexplore.ieee.org/abstract/document/7961558/" },
                        { "from": "PDF", "url": "/assets/papers/towards_a_3d_virtual_programming_language_to_increase_the_number_of_women_in_computer_science_education.pdf" }
                    ]
                },
                {
                    "name": "Galvan, A., <b>Ortega<\/b>, F., and Rishe, N., \"Procedural Celestial Rendering for 3D Navigation.\" In 2017 IEEE Symposium on 3D User Interfaces (3DUI), Los Angeles, CA. 2017. pp. 211–212. ",
                    "links": [
                        { "from": "IEEE Xplore", "url": "http://ieeexplore.ieee.org/abstract/document/7893346/" },
                        { "from": "PDF", "url": "/assets/papers/procedural_celestial_rendering_for_3d_navigation.pdf" }
                    ]
                },
                {
                    "name": "Calella, J., <b>Ortega, F.<\/b>, Rishe, N., Barreto, A., and Bernal, J., \"HandMagic: Towards User Interaction with Inertial Measuring Units.\" In 2016 IEEE SENSORS. Orlando, FL. 2016, pp. 1-3.",
                    "links": [
                        { "from": "IEEE Xplore", "url": "http://ieeexplore.ieee.org/abstract/document/7808524/" },
                        { "from": "PDF", "url": "/assets/papers/handmagic-_towards_user_interaction_with_inertial_measuring_units.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Balcazar, R., Barreto, A., and Rishe, N., \"Smart Learning Desk: Towards an Interactive Classroom.\" In IEEE Virtual Reality 2016 Workshop on K-12 Embodied Learning through Virtual & Augmented Reality (KELVAR ’16), Mar. 2016.",
                    "links": [
                        { "from": "WEBPAGE", "url": "https://sites.google.com/site/vrkelvar/vr2016" },
                        { "from": "GOOGLE DOC", "url": "https://docs.google.com/viewer?a=v&amp;amp;pid=sites&amp;amp;srcid=ZGVmYXVsdGRvbWFpbnx2cmtlbHZhcnxneDoxZWUyMTc0YjgwNDZkYjQ4" }
                    ]
                },
                {
                    "name": "Vassigh, S., Elias, A.,<b> Ortega, F.<\/b>, Davis, D., Gallardo, G., Alhaffar, H., Borges, L., Bernal, J., and Rishe, N., \"Integrating Building Information Modeling with Augmented Reality for Interdisciplinary Learning.\" In Mixed and Augmented Reality (ISMAR-Adjunct), 2016 IEEE International Symposium on, pp. 260–261, IEEE, 2016.",
                    "links": [
                        { "from": "IEEE Xplore", "url": "http://ieeexplore.ieee.org/abstract/document/7836510/" },
                        { "from": "PDF", "url": "/assets/papers/integrating_building_information_modeling_with_augmented_reality_for_interdisciplinary_learning.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Rishe, N., and Barreto, A., \"TAMGeF: Touch-midAir-Motion Framework for Spatial Input.\" In Proceedings of the 3rd ACM Symposium on Spatial User Interaction (SUI ’15). ACM, New York, NY, USA, pp. 136, 2015.",
                    "links": [
                        { "from": "ACM", "url": "https://dl.acm.org/citation.cfm?id=2794355" },
                        { "from": "PDF", "url": "/assets/papers/tamgef-_touch-midair-motion_framework_for_spatial_input.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., Adjouadi, M., and Liu, S., \"Exploring Modeling Language for Multi-Touch Systems Using Petri Nets.\" In Proceedings of the 2013 ACM International Conference on Interactive Tabletops and Surfaces (ITS ’13), ACM, New York, NY, USA. pp. 361–364. 2013.",
                    "links": [
                        { "from": "ACM", "url": "https://dl.acm.org/citation.cfm?id=2512400" },
                        { "from": "PDF", "url": "/assets/papers/exploring_modeling_language_for_multi-touch_systems_using_petri_nets.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Barreto, A., and Rishe, N., \"Augmenting Multi-Touch with Commodity Devices.\" In Proceedings of the 1st Symposium on Spatial User Interaction (SUI 13). ACM, New York, NY, USA, p. 95. 2013.",
                    "links": [
                        { "from": "ACM", "url": "https://dl.acm.org/citation.cfm?id=2491399" },
                        { "from": "PDF", "url": "/assets/papers/augmenting_multi-touch_with_commodity_devices.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N. and Adjouadi, M., and Abyarjoo, F., \"Poster: Real-Time Gesture Detection for Multi-Touch Devices.\" In IEEE 8th Symposium on 3D User Interfaces, pp. 167-168. 2013.",
                    "links": []
                },
                {
                    "name": "Hernandez, H.,<b> Ortega, F.<\/b>, \"Eberos GML2D: A Graphical Domain-Specific Language for Modeling 2D Video Games.\" In Proceedings of the 10th Workshop on Domain-Specific Modeling (DSM ’10). ACM, New York, NY, USA, article 4, pages 6, 2010.",
                    "links": [
                        { "from": "Citeseerx", "url": "http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.682.9199" },
                        { "from": "PDF", "url": "/assets/papers/A_Graphical_Domain-Specific_Language_for_Modeling_2D_Video_Games.pdf" }
                    ]
                }
            ],
            "Other": [
                {
                    "name": "Aazhang, B., Abler, R. T., Allebach, J. P., Bost, L. F., Cavallaro, J. R., Chong, E. K. P., Coyle, E. J., Cullers, J. B. S., Dennis, S. M., Dong, Y., Enjeti, P. N., Filippas, A. V., Froyd, J. E., Garmire, D., George, J., Gilchrist, B. E., Hohner, G. S., Hughes, W. L., Johnson, A., Kim, C., Kim, H., Klenke, R. H., Lagoudas, M. Z., Llewellyn, D. C., Lu, Y., Lybarger, K. J., Marshall, S., Muralidharan, S., Ohta, A. T.,<b> Ortega, F. R.<\/b>, Riskin, E. A., Rizzo, D. M., Ryder, C. R., Shiroma, W. A., Siller, T. J., Sonnenberg-Klein, J., Sadjadi, S. M., Strachan, S. M., Taheri, M., Woods, G. L., Zoltowski, C. B., Fabien, B. C., Johnson, P., Collins, R., and Murray, P. \"Vertically Integrated Projects (VIP) Programs: Multidisciplinary Projects with Homes in Any Discipline\" In 2017 ASEE Annual Conference & Exposition, Columbus, Ohio. June, 2017.",
                    "links": [
                        { "from": "ASEE Peer", "url": "https://peer.asee.org/29103" }
                    ]
                }
            ],
            "Books": [
                {
                    "name": "<b>Ortega, F.<\/b>, Rishe, N., and Barreto, A., 3D Multimodal interaction: With an Input Perspective, CRC Press/AK Peters book. New York, NY. 2018.",
                    "links": []
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Rishe, N., and Barreto, A., Multi-Touch: Gesture Recognition, Elicitation, and More, CRC Press/AK Peters book. New York, NY. 2018.",
                    "links": []
                },
                {
                    "name": "<b>Ortega, F<\/b>. Abyarjoo, F., Barreto, A., Rishe, N., and Adjouadi, M., Interaction design for 3D user interfaces: the world of modern input devices for research, applications, and game development. CRC Press/AK Peters, New York, NY, 2016.",
                    "links": []
                }
            ],
            "BookChapters": [
                {
                    "name": "Hernandez, H.,<b> Ortega, F.<\/b>, \"Reducing Video Game Creation Effort with Eberos GML2D.\" Chapter in Game Development Tools Books edited by Marwan Y. Ansari. AK Peters/CRC Press. New York, NY, 2011.",
                    "links": []
                }
            ],
            "NonRefeered": [
                {
                    "name": "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., and Adjouadi, M., \"Towards 3D Data Environments Using Multi-Touch Screens.\" In ACHI 2012: The Fifth International Conference on Advances in Computer-Human Interactions, pp. 118–121, 2012.",
                    "links": [
                        { "from": "Citeseerx", "url": "http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.683.4461" },
                        { "from": "PDF", "url": "/assets/papers/towards_3d_data_environments_using_multi-touch_screens.pdf" }
                    ]
                },
                {
                    "name": "<b>Ortega, F.<\/b>, Barreto, A., Rishe, N., Adjoudi, M., and Abyarjoo, F., \"GyroTouch: Complementing the Multi-Touch Display.\" In ACM Richard Tapia Celebration of Diversity in Computing, 2014.",
                    "links": [
                        { "from": "Citeseerx", "url": "http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.707.8806" },
                        { "from": "PDF", "url": "/assets/papers/gyrotouch-_complementing_the_multi-touch_display.pdf" }
                    ]
                },
                {
                    "name": "Cofino, J., Barreto, A., Abyarjoo, F., and <b>Ortega, F.<\/b>, \"B.A.S.S. Blind-Assistive Spatialized Screen-reading.\" In ACM Richard Tapia Celebration of Diversity in Computing, 2014.",
                    "links": [
                        { "from": "FIU Digital Commons", "url": "http://digitalcommons.fiu.edu/etd/1570/" }
                    ]
                }
            ]
        });
    };
    PublicationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], PublicationService);
    return PublicationService;
}());



/***/ }),

/***/ "../../../../../src/app/publications/publications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pub {\n    padding: 10px;\n    min-height: 100px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/publications/publications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <br>\n    <h1 style=\"text-align: center;\">Publications</h1>\n    <div class=\"table\">\n        <div *ngIf=\"!publications.RefeeredJournals\" class=\"row\">\n            <div class=\"col-md-12\">\n                <!-- Start Refeered Journals -->\n                <div class=\"row\">\n                    <div class=\"com-md-12\"><h3>Refereed Journals</h3></div>\n                </div>\n                \n                <div *ngFor=\"let pub of publications.RefereedJournals\" class=\"row\">\n                    <div class=\"col-md-12 pub\">\n                        <div class=\"row\">\n                           <div class=\"col-md-12\">\n                                {{getCounter()}}.&nbsp;<span [innerHTML]=\"pub.name\"></span>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div *ngIf=\"pub.links\" class=\"col-md-4\">\n                                <span *ngFor=\"let link of pub.links\">\n                                    [<a [attr.href]=\"link.url\">{{link.from}}</a>]\n                                </span>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <!-- empty div -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- End Refeered Journals -->\n            </div>\n        </div>\n\n        <div *ngIf=\"publications.RefereedConferences\" class=\"row\">\n            <div class=\"col-md-12\">\n                <!-- Start Refereed Conferences -->\n                <div class=\"row\">\n                    <div class=\"com-md-12\"><h3>Refereed Conferences</h3></div>\n                </div>\n                                \n                <div *ngFor=\"let pub of publications.RefereedConferences\" class=\"row\">\n                    <div class=\"col-md-12 pub\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                {{getCounter()}}.&nbsp;<span [innerHTML]=\"pub.name\"></span>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div *ngIf=\"pub.links\" class=\"col-md-4\">\n                                <span *ngFor=\"let link of pub.links\">\n                                    [<a [attr.href]=\"link.url\">{{link.from}}</a>]\n                                </span>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <!-- empty div -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- End Refeered Journals -->\n            </div>\n        </div>\n        \n        <div *ngIf=\"publications.Workshop\" class=\"row\">\n            <div class=\"col-md-12\">\n                <!-- Start Workshop and Poster -->\n                <h3>Workshop and Poster Refereed Papers</h3>\n                \n                <div *ngFor=\"let pub of publications.Workshop\" class=\"row\">\n                    <div class=\"col-md-12 pub\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                {{getCounter()}}.&nbsp;<span [innerHTML]=\"pub.name\"></span>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div *ngIf=\"pub.links\" class=\"col-md-4\">\n                                <span *ngFor=\"let link of pub.links\">\n                                    [<a [attr.href]=\"link.url\">{{link.from}}</a>]\n                                </span>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <!-- empty div -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- End Workshop and Poster -->\n            </div>\n        </div>\n\n        <div *ngIf=\"publications.Other\" class=\"row\">\n            <div class=\"col-md-12\">\n                <!-- Start Other Referred Papers -->\n                <h3>Other Referred Papers</h3>\n                \n                <div *ngFor=\"let pub of publications.Other\" class=\"row\">\n                    <div class=\"col-md-12 pub\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                {{getCounter()}}.&nbsp;<span [innerHTML]=\"pub.name\"></span>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div *ngIf=\"pub.links\" class=\"col-md-4\">\n                                <span *ngFor=\"let link of pub.links\">\n                                    [<a [attr.href]=\"link.url\">{{link.from}}</a>]\n                                </span>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <!-- empty div -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- End Other Referred Papers -->\n            </div>\n        </div>\n\n        <div *ngIf=\"publications.Books\" class=\"row\">\n            <div class=\"col-md-12\">\n                <!-- Start Books -->\n                <h3>Books</h3>\n                \n                <div *ngFor=\"let pub of publications.Books\" class=\"row\">\n                    <div class=\"col-md-12 pub\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                {{getCounter()}}.&nbsp;<span [innerHTML]=\"pub.name\"></span>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div *ngIf=\"pub.links\" class=\"col-md-4\">\n                                <span *ngFor=\"let link of pub.links\">\n                                    [<a [attr.href]=\"link.url\">{{link.from}}</a>]\n                                </span>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <!-- empty div -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- End Books -->\n            </div>\n        </div>\n\n        <div *ngIf=\"publications.BookChapters\" class=\"row\">\n            <div class=\"col-md-12\">\n                <!-- Start Book Chapters -->\n                <h3>Book Chapters</h3>\n                \n                <div *ngFor=\"let pub of publications.BookChapters\" class=\"row\">\n                    <div class=\"col-md-12 pub\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                {{getCounter()}}.&nbsp;<span [innerHTML]=\"pub.name\"></span>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div *ngIf=\"pub.links\" class=\"col-md-4\">\n                                <span *ngFor=\"let link of pub.links\">\n                                    [<a [attr.href]=\"link.url\">{{link.from}}</a>]\n                                </span>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <!-- empty div -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- End Book Chapters -->\n            </div>\n        </div>\n\n        <div *ngIf=\"publications.NonRefeered\" class=\"row\">\n            <div class=\"col-md-12\">\n                <!-- Start Non-refereed Papers -->\n                <h3>Non-refereed Papers</h3>\n                \n                <div *ngFor=\"let pub of publications.NonRefeered\" class=\"row\">\n                    <div class=\"col-md-12 pub\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                {{getCounter()}}.&nbsp;<span [innerHTML]=\"pub.name\"></span>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div *ngIf=\"pub.links\" class=\"col-md-4\">\n                                <span *ngFor=\"let link of pub.links\">\n                                    [<a [attr.href]=\"link.url\">{{link.from}}</a>]\n                                </span>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <!-- empty div -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- End Non-refereed Papers -->\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/publications/publications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__publication_service__ = __webpack_require__("../../../../../src/app/publications/publication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublicationsComponent = (function () {
    function PublicationsComponent(_PubService) {
        this._PubService = _PubService;
        this.index = 0;
        this.publications = _PubService.getPublication();
        this.index = 0;
        //console.log("After Constructor");
        //console.log(this.publications);
        //console.log(this.publications.RefereedJournals);
        //console.log(this.publications.RefereedConferences);
    }
    //ngOnInit(){
    //  this.getPublications();
    //}
    //private getPublications(){
    //  this._PubService.getPublications()
    //  .subscribe(publications => this.publications = publications);
    //}
    PublicationsComponent.prototype.IncreseCounter = function () {
        this.index++;
    };
    PublicationsComponent.prototype.getCounter = function () {
        this.IncreseCounter();
        return this.index;
    };
    PublicationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'publications',
            template: __webpack_require__("../../../../../src/app/publications/publications.component.html"),
            styles: [__webpack_require__("../../../../../src/app/publications/publications.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__publication_service__["a" /* PublicationService */]])
    ], PublicationsComponent);
    return PublicationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/resources/resources.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ResourceSize{\n    height: 150 px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-align: center;\n}\n\n.refImg{\n    max-height: 80 px;\n}\n\nimg {\n    max-width: 100%;\n    max-height: 120px;\n    vertical-align: middle;\n}\n\n.portrait {\n    height: 80px;\n    width: 30px;\n}\n\n.landscape {\n    height: 30px;\n    width: 80px;\n}\n\n.square {\n    height: 75px;\n    width: 75px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resources/resources.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <h1 class>RESOUCES</h1>\n\n    <div class=\"table\">\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>Links</h3>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <ul>\n                    <li><a href=\"https://www.una.edu/writingcenter/docs/Writing-Resources/Comparing%20the%20Annotated%20Bibliography%20to%20the%20Literature%20Review.pdf\">Comparing the Annotated Bibliography to the Literature Review </a></li>\n                    <li><a href=\"https://users.ece.cmu.edu/~koopman/essays/abstract.html\">How to Write an Abstract Philip Koopman</a></li>\n                </ul>\n            </div>\n        </div>\n\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <h3>Conferences</h3>\n                <br>\n            </div>\n        </div>\n\n        <div class=\"row ResourceSize\">\n            <div class=\"col-md-3 ResourceSize\">\n                <a href=\"http://www.siggraph.org/\"><img class=\"refImg\" src=\"/assets/conferences/acm-siggraph.svg\"></a>\n            </div>\n            <div class=\"col-md-3 ResourceSize\">\n                <a href=\"http://www.ieee.org/conferences_events/index.html\"><img class=\"refImg\" src=\"/assets/conferences/ieee.svg\"></a>\n            </div>\n            <div class=\"col-md-3 ResourceSize\">\n                <a href=\"https://chi2016.acm.org/wp/\"><img class=\"refImg\" src=\"/assets/conferences/chi.svg\"></a>\n            </div>\n            <div class=\"col-md-3 ResourceSize\">\n                <a href=\"https://cscw.acm.org/2017/\"><img class=\"refImg\" src=\"/assets/conferences/cscw.png\"></a>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-3 ResourceSize\">\n                <a href=\"http://sui-symposium.org/\"><img src=\"/assets/conferences/sui.svg\"></a>\n            </div>\n            <div class=\"col-md-3 ResourceSize\">\n                <a href=\"http://3dui.org/\"><img src=\"/assets/conferences/3dui.png\"></a>\n            </div>\n            <div class=\"col-md-3\"></div>\n        </div>\n        <br>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/resources/resources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResourcesComponent = (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'resources',
            template: __webpack_require__("../../../../../src/app/resources/resources.component.html"),
            styles: [__webpack_require__("../../../../../src/app/resources/resources.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
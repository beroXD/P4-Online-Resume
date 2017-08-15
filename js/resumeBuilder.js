var bio = {
	"name": "Abeer Abdulrahman",
	"role": "Front-End Developer",
	"welcomeMessage": "Welcome to my world",
	"biopic": "images/me.jpg",
	"contacts": {
		"email": "abeer.al@gmail.com",
		"mobile": "+966555555",
		"github": "beroXD",
		"linkedin": "abeer-al-abdulaali-ab4735b9",
		"location": "Saudi Arabia"
	},
	"skills": ["HTML", "Team Work", "Project Manegment"]
};

var education = {
	"schools": [
		{
			"name": "King Faisal University",
			"location": "AlAhsa, SA",
			"degree": "Bachelor",
			"majors": ["Computer Information Systems"],
			"dates": "2011 - 2015"
        }
    ],
	"onlineCourses": [
		{
			"title": "Front-End Web Development",
			"school": "Udacity",
			"dates": "2017 - 2018",
			"url": "https://www.udacity.com/"
		}
	]
};

var work = {
	"jobs": [{
		"employer": "Arab National Bank",
		"title": "Customer Service",
		"location": "AlAhsa, SA",
		"dates": "2014 - 2015",
		"description": "For my CO-OP Training, I worked in ANB in the Customer Service Department. Building my communication and teamwork skills."
    }]
};

var projects = {
	"projects": [{
		"title": "Maid Brigade Mobile App",
		"dates": "2014 - 2015",
		"description": "Maid Brigade mobile application would be a more convenient way for customers to request the service, remind them to evaluate the service and to notify them about any new offers. The application will include the Quality Card Evaluation form in addition to other services provided currently through the main website of the organization.",
		"images": [
            "images/p1.png",
            "images/p2.png"
        ]
    }]
};

//display dio

bio.display = function () {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedName + formattedRole);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLinkedin, formattedLocation);

	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic);

	var formattedMess = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMess);

	$("#header").append(HTMLskillsStart);
	for (var s = 0; s < bio.skills.length; s++) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[s]);
		formattedSkills = HTMLskills.replace("%data%", bio.skills[s]);
		formattedSkills = HTMLskills.replace("%data%", bio.skills[s]);

		$("#skills").append(formattedSkills);
	}
};

//display education 

education.display = function () {
	for (var e = 0; e < education.schools.length; e++) {
		$("#education").append(HTMLschoolStart);

		var formattedSname = HTMLschoolName.replace("%data%", education.schools[e].name);
		var formattedSdegree = HTMLschoolDegree.replace("%data%", education.schools[e].degree);
		$(".education-entry:last").append(formattedSname + formattedSdegree);

		var formattedSlocation = HTMLschoolLocation.replace("%data%", education.schools[e].location);
		$(".education-entry:last").append(formattedSlocation);

		var formattedSdate = HTMLschoolDates.replace("%data%", education.schools[e].dates);
		$(".education-entry:last").append(formattedSdate);


		var formattedSmajor = HTMLschoolMajor.replace("%data%", education.schools[e].majors);
		$(".education-entry:last").append(formattedSmajor);
	}
	for (var o = 0; o < education.onlineCourses.length; o++) {
		$("#online-education").append(HTMLonlineClasses);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[o].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[o].school);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

		var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[o].dates);
		$(".education-entry:last").append(formattedOnlineDate);

		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[o].url);
		$(".education-entry:last").append(formattedOnlineUrl);
	}
};

//display work

work.display = function () {
	for (var job = 0; job < work.jobs.length; job++) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkDes = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDes);
	}
};

//display projects

projects.display = function () {
	for (var p = 0; p < projects.projects.length; p++) {
		$("#projects").append(HTMLprojectStart);

		var formattedPtitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
		$(".project-entry:last").append(formattedPtitle);

		var formattedPdates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
		$(".project-entry:last").append(formattedPdates);

		var formattedPdesc = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
		$(".project-entry:last").append(formattedPdesc);

		for (var i = 0; i < projects.projects[p].images.length; i++) {
			var formattedPimg = HTMLprojectImage.replace("%data%", projects.projects[p].images[i]);
			$(".project-entry:last").append(formattedPimg);
		}
	}
};

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);

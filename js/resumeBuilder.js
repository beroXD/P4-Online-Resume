var bio = {
	"name": "Abeer Abdulrahman",
	"role": "Front-End Developer",
	"welcomeMessage": "Welcome to my world",
	"biopic": "images/me.jpg",
	"contacts": [{
		"email": "abeer.al@gmail.com",
		"mobile": "+966555555",
		"github": "beroXD",
		"linkedin": "abeer-al-abdulaali-ab4735b9",
		"location": "Saudi Arabia"
    }],
	"skills": ["HTML", "Team Work", "Project Manegment"]
};

var education = {
	"schools": [{
			"name": "King Faisal University",
			"location": "AlAhsa, SA",
			"degree": "Bachelor",
			"major": "Computer Information Systems",
			"date": "2011 - 2015"
        },
		{
			"name": "Udacity",
			"location": "Dammam, SA",
			"degree": "Nanodegree",
			"major": "Front-End Web Development",
			"date": "2017 - 2018"
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
		"descr": "Maid Brigade mobile application would be a more convenient way for customers to request the service, remind them to evaluate the service and to notify them about any new offers. The application will include the Quality Card Evaluation form in addition to other services provided currently through the main website of the organization.",
		"img": [
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

	for (var contact = 0; contact < bio.contacts.length; contact++) {

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
		$("#topContacts, #footerContacts").append(formattedMobile);

		var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
		$("#topContacts, #footerContacts").append(formattedEmail);

		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
		$("#topContacts, #footerContacts").append(formattedGithub);

		var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts[contact].linkedin);
		$("#topContacts, #footerContacts").append(formattedLinkedin);

		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
		$("#topContacts, #footerContacts").append(formattedLocation);
	}

	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic);

	var formattedMess = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMess);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkills);
		formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);

		$("#skills").append(formattedSkills);
		formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkills);
	}
};

//display education 

education.display = function () {
	for (var e = 0; e < education.schools.length; e++) {
		$("#education").append(HTMLschoolStart);

		var formattedSname = HTMLschoolName.replace("%data%", education.schools[e].name);
		$(".education-entry:last").append(formattedSname);

		var formattedSlocation = HTMLschoolLocation.replace("%data%", education.schools[e].location);
		$(".education-entry:last").append(formattedSlocation);

		var formattedSdate = HTMLschoolDates.replace("%data%", education.schools[e].date);
		$(".education-entry:last").append(formattedSdate);

		var formattedSdegree = HTMLschoolDegree.replace("%data%", education.schools[e].degree);
		$(".education-entry:last").append(formattedSdegree);

		var formattedSmajor = HTMLschoolMajor.replace("%data%", education.schools[e].major);
		$(".education-entry:last").append(formattedSmajor);
	}
};

//display work

work.display = function () {
	for (var job = 0; job < work.jobs.length; job++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

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

		var formattedPdesc = HTMLprojectDescription.replace("%data%", projects.projects[p].descr);
		$(".project-entry:last").append(formattedPdesc);

		for (var i = 0; i < projects.projects[p].img.length; i++) {
			var formattedPimg = HTMLprojectImage.replace("%data%", projects.projects[p].img[i]);
			$(".project-entry:last").append(formattedPimg);
		}
	}
};

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);

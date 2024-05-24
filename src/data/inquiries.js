import { randFullName, randCountry, randEmail } from "@ngneat/falso";

function randPriceRange() {
    const priceRanges = [
        "₱ 10,000 - ₱ 20,000",
        "₱ 20,000 - ₱ 50,000",
        "₱ 50,000 - ₱ 100,000"
    ];

    const randomIndex = Math.floor(Math.random() * priceRanges.length);
    return priceRanges[randomIndex];
}

  function randMessage() {
    const applicationNeeds = [
        "Our business requires an application to streamline operations and enhance customer experience.",
        "I'm seeking an application solution to optimize efficiency and productivity within our company.",
        "Our company is in need of an application to improve internal processes and facilitate communication.",
        "We are looking to develop an application tailored to the specific needs of our business.",
        "I'm interested in acquiring an application that can help scale our business operations effectively.",
        "We're exploring the possibility of implementing an application to better serve our customers and clients.",
        "Our company is actively seeking a customized application to support our growth and expansion.",
        "We require an application solution that can integrate seamlessly with our existing systems and workflows.",
        "I'm in the market for an application that can address the unique challenges faced by our company.",
        "Our business is in need of a reliable application to stay competitive in today's market."
      ];

    const randomIndex = Math.floor(Math.random() * applicationNeeds.length);
    return applicationNeeds[randomIndex];
}

function randService() {
    const services = [
        'Website Development',
        'Mobile App Development',
        'Web App Development',
        'Desktop App Development',
        'Cross-platform Development',
        'Other'
    ]

    const randomIndex = Math.floor(Math.random() * services.length);
    return services[randomIndex];
}

function randStatus() {
    const status = [
        "New",
        "In Progress",
        "Accepted",
        "Cancelled",
        "Completed",

        //OTHER STATUS
        /* "Pending Response",
        "Follow-Up Required",
        "Quoted",
        "Rejected",
        "Closed", */
    ];

    const randomIndex = Math.floor(Math.random() * status.length);
    return status[randomIndex];
}

function randDevTeam() {
    const developerTeams = [
        "Alpha Developer Team",
        "Bravo Developer Team",
        "Charlie Developer Team",
        "Delta Developer Team",
        "Echo Developer Team",
        "Foxtrot Developer Team",
        "Golf Developer Team",
        "Hotel Developer Team",
        "India Developer Team",
        "Juliet Developer Team"
    ];

    const randomIndex = Math.floor(Math.random() * developerTeams.length);
    return developerTeams[randomIndex];
}

export function generateFakeInquiries(count) {
    if (typeof count !== 'number' || count <= 0) {
        throw new Error('Invalid count: Please provide a positive integer.');
    }

    return Array.from({ length: count }, (_, index) => ({
        id: index + 1,
        name: randFullName({ withAccents: false }),
        email: randEmail(),
        country: randCountry(),
        budget: randPriceRange(),
        message: randMessage(),
        service: randService(),
        status: randStatus(),
        team: randDevTeam(),
    }));
}

export function getStatusCount(data, status) {
    const filteredData = data.filter(inquiry => inquiry.status === status);
    return filteredData.length;
  }

export const inquiriesDummyData = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        country: 'United States',
        budget: '₱ 20,000 - ₱ 50,000',
        message: 'I need a new website for my business with e-commerce capabilities.',
        service: ['Website Development'],
        status: 'New',
        team: 'Web Developer Team 1'
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        country: 'Canada',
        budget: '₱ 10,000 - ₱ 20,000',
        message: 'Looking to develop a mobile app for my startup.',
        service: ['Mobile App Development'],
        status: 'In Progress',
        team: 'Mobile Developer Team 2'
    },
    {
        id: '3',
        name: 'Carlos Mendoza',
        email: 'carlos.mendoza@example.com',
        country: 'Mexico',
        budget: '₱ 50,000 - ₱ 100,000',
        message: 'We need a web application to manage our inventory.',
        service: ['Web App Development'],
        status: 'Accepted',
        team: 'Web Developer Team 2'
    },
    {
        id: '4',
        name: 'Anna Ivanova',
        email: 'anna.ivanova@example.com',
        country: 'Russia',
        budget: '₱ 20,000 - ₱ 50,000',
        message: 'Our company requires a desktop application for data analysis.',
        service: ['Desktop App Development'],
        status: 'Cancelled',
        team: 'Desktop Developer Team 1'
    },
    {
        id: '5',
        name: 'Ling Wei',
        email: 'ling.wei@example.com',
        country: 'China',
        budget: '₱ 20,000 - ₱ 50,000',
        message: 'We want to create a cross-platform app for our services.',
        service: ['Cross-platform Development'],
        status: 'Completed',
        team: 'Desktop Developer Team 2'
    },
    {
        id: '6',
        name: 'Ahmed Ali',
        email: 'ahmed.ali@example.com',
        country: 'United Arab Emirates',
        budget: '₱ 50,000 - ₱ 100,000',
        message: 'I need a custom software solution for our unique business needs.',
        service: ['Other'],
        status: 'Completed',
        team: 'Desktop Developer Team 2'
    }
]

export const inquiryStatuses = [
    { status: 'New', color: '#007bff' },
    { status: 'In Progress', color: '#fd7e14' },
    { status: 'Pending Response', color: '#ffc107' },
    { status: 'Follow-Up Required', color: '#17a2b8' },
    { status: 'Quoted', color: '#6f42c1' },
    { status: 'Accepted', color: '#28a745' },
    { status: 'Rejected', color: '#dc3545' },
    { status: 'Completed', color: '#218838' },
    { status: 'Cancelled', color: '#6c757d' },
    { status: 'Closed', color: '#343a40' }
];

export const inquiryStatusesPastel = [
    { status: 'New', color: '#a2cffe' },
    { status: 'In Progress', color: '#ffcc99' },
    { status: 'Pending Response', color: '#ffecb3' },
    { status: 'Follow-Up Required', color: '#b2ebf2' },
    { status: 'Quoted', color: '#d4b0ff' },
    { status: 'Accepted', color: '#c8e6c9' },
    { status: 'Rejected', color: '#ffb3b3' },
    { status: 'Completed', color: '#a5d6a7' },
    { status: 'Cancelled', color: '#dcdcdc' },
    { status: 'Closed', color: '#c0c0c0' }
];
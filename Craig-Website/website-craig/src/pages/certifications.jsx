import Head from 'next/head'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import certCompTIA from '@/images/certifications/comptiaA+.png'
import certAWSCCCP from '@/images/certifications/awscccp.png'
import certMSAZ900 from '@/images/certifications/msaz900.png'
import certSafe1 from '@/images/certifications/safepo.png'
import certAWSCQSA from '@/images/certifications/awscqsa.png'
import asisc2 from '@/images/certifications/asisc2.png'
import dcnaIBM from '@/images/certifications/dcnaIBM.png'
import safeDevO from '@/images/certifications/safeDevO.png'
import safePrac from '@/images/certifications/safePrac.png'
import IBMcc from '@/images/certifications/IBMcc.png'
import compProj from '@/images/certifications/compProj.png'
import safeSM from '@/images/certifications/safeSM.png'

const certifications = [
    {
        name: 'CompTIA A+',
        description:
            'An entry-level certification for IT professionals covering mobile devices, networking, hardware, virtualization, and cloud computing.',
        link: { href: 'https://www.credly.com/badges/99aff24a-8889-43c9-a24e-78facf2c1d4b/public_url', label: 'CompTIA - Credly' },
        logo: certCompTIA,
    },
    {
        name: 'AWS Cloud Quest: Solutions Architect',
        description:
            'A certification covering building secure, fault tolerant and highly available AWS solutions.',
        link: { href: 'https://www.credly.com/badges/f9f2006d-e2bb-4367-a062-a706d6b890df/public_url', label: 'AWS - Credly' },
        logo: certAWSCQSA,
    },
    {
        name: 'AWS Cloud Quest: Cloud Practitioner',
        description:
            'A certification for cloud engineers, covering cloud fundamentals, IP services, security, and automation.',
        link: { href: 'https://www.credly.com/badges/7ca9fe5c-04c0-48ab-a941-9902485497dc/public_url', label: 'AWS - Credly' },
        logo: certAWSCCCP,
    },
    {
        name: 'Microsoft Certified: Azure Fundamentals',
        description:
            'A certification demonstrating foundational level knowledge of cloud services and how those services are provided with Microsoft Azure',
        link: { href: 'https://www.credly.com/badges/66dbd724-82d5-4ac1-9f90-47aa934fcbc1/public_url', label: 'Microsoft - Credly' },
        logo: certMSAZ900,
    },
    {
        name: 'SAFe® 5 Product Owner/Product Manager',
        description:
            'SAFe professional who works with customers and development organizations to identify and write requirements. Key areas of competency include identifying customer needs, writing epics, capabilities, and features.',
        link: { href: 'https://www.credly.com/badges/f357bd90-3503-4413-a6dd-64483d2a8ff9/public_url', label: 'SAFe - Credly' },
        logo: certSafe1,
    },
    {
        name: 'Associate of (ISC)²',
        description:
            'A certification for IT security professionals, covering threats, attacks, risk management, and cryptography.',
        link: { href: 'https://www.credly.com/badges/dc6b7ab8-b632-4df4-8e33-7040817ca509/public_url', label: 'ISC2 - Credly' },
        logo: asisc2,
    },
    {
        name: 'Developing Cloud Native Applications',
        description:
            'Certification for defining and describing the significance of hybrid cloud infrastructures and two critical areas of cloud thinking: modernization and continuous integration/continuous delivery.',
        link: { href: 'https://www.credly.com/badges/03344528-bfee-4043-90cf-c5904ced4118/public_url', label: 'IBM - Credly' },
        logo: dcnaIBM,
    },
    {
        name: 'SAFe 5 DevOps Practitioner',
        description:
            'A certification for Dev Ops Continuous Exploration, Continuous Integration, Continuous Deployment, Release-on-Demand, continuous testing, continuous security, and building a culture of shared responsibility',
        link: { href: 'https://www.credly.com/badges/356b9e02-b3cf-4387-967e-d949bb5e5c0f/public_url', label: 'SAFe - Credly' },
        logo: safeDevO,
    },
    {
        name: 'SAFe 5 Practitioner',
        description:
            'A Certified SAFe® 5 Practitioner (SP) is a SAFe team member professional responsible for using Scrum, Kanban, and XP in a SAFe environment.',
        link: { href: 'https://www.credly.com/badges/bcd332b7-b891-4f30-a602-1c421470fb9f/public_url', label: 'SAFe - Credly' },
        logo: safePrac,
    },
    {
        name: 'Introduction to Cloud Computing',
        description:
            'Being able to describe cloud platforms and models including IaaS, PaaS, SaaS, and public, private and hybrid multiclouds. Familiar with essentials of cloud applications and terms like Virtualization, VMs, Containers, Object Storage, Microservices, Serverless, Cloud Native, and DevOps',
        link: { href: 'https://www.credly.com/badges/194c3086-24a6-4573-9025-379c8f34ed7a/public_url', label: 'IBM - Credly' },
        logo: IBMcc,
    },
    {
        name: 'SAFe 5 Scrum Master',
        description:
            'Key areas of competency include using Scrum and Kanban to facilitate team events, supporting program execution, and coaching Agile teams.',
        link: { href: 'https://www.credly.com/badges/537d98a8-3494-4c23-b172-92bdb75b836e/public_url', label: 'SAFe - Credly' },
        logo: safeSM,
    },    {
        name: 'CompTIA Project+ Certification',
        description:
            'Certified knowledge and skills required to manage a project life cycle, ensure proper communication, manage resources and stakeholders and maintain project documentation.',
        link: { href: 'https://www.credly.com/badges/c77b00d1-c7b2-4c3c-9cb1-44c02bbbbe61/public_url', label: 'comptia.org' },
        logo: compProj,
    },
]

function LinkIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
            />
        </svg>
    )
}

export default function Certifications() {
    return (
        <>
            <Head>
                <title>Certifications - Craig Willey</title>
                <meta
                    name="description"
                    content="My IT certifications and qualifications."
                />
            </Head>
            <SimpleLayout
                title="My IT certifications and qualifications."
                intro="These are the IT certifications I've earned throughout my career. They represent my commitment to continuous learning and staying up-to-date with the latest technologies."
            >
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {certifications.map((certification) => (
                        <Card as="li" key={certification.name}>
                            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <Image
                                    src={certification.logo}
                                    alt=""
                                    className="h-12 w-12"
                                    unoptimized
                                />
                            </div>
                            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                <Card.Link href={certification.link.href}>{certification.name}</Card.Link>
                            </h2>
                            <Card.Description>{certification.description}</Card.Description>
                            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                                <LinkIcon className="h-6 w-6 flex-none" />
                                <span className="ml-2">{certification.link.label}</span>
                            </p>
                        </Card>
                    ))}
                </ul>
            </SimpleLayout>
        </>
    );
}
import Head from 'next/head'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import courseDataScience from '@/images/courses/data-science.jpg'
import courseReact from '@/images/courses/react.jpg'
import courseJavaScript from '@/images/courses/javascript.jpg'
import courseMachineLearning from '@/images/courses/machine-learning.jpg'
import courseBlockchain from '@/images/courses/blockchain.jpg'

const courses = [
  {
    name: 'Data Science in Python',
    description: 'A comprehensive course on Python for data science.',
    link: { href: 'https://www.coursera.org', label: 'Coursera' },
    provider: 'Coursera',
    image: courseDataScience,
  },
  {
    name: 'React - The Complete Guide',
    description: 'Learn to build reactive web applications with React.',
    link: { href: 'https://www.udemy.com', label: 'Udemy' },
    provider: 'Udemy',
    image: courseReact,
  },
  {
    name: 'Advanced JavaScript Concepts',
    description: 'Master the intricacies and complex concepts in JavaScript.',
    link: { href: 'https://www.pluralsight.com', label: 'Pluralsight' },
    provider: 'Pluralsight',
    image: courseJavaScript,
  },
  {
    name: 'Machine Learning A-Z',
    description: 'A deep dive into Machine Learning concepts and algorithms.',
    link: { href: 'https://www.udemy.com', label: 'Udemy' },
    provider: 'Udemy',
    image: courseMachineLearning,
  },
  {
    name: 'Understanding Blockchain',
    description: 'Learn the fundamental concepts behind blockchain technology.',
    link: { href: 'https://www.linkedin.com/learning', label: 'LinkedIn Learning' },
    provider: 'LinkedIn Learning',
    image: courseBlockchain,
  },
]

function LinkIcon(props) {
  // existing SVG icon code...
}

export default function Courses() {
  return (
      <>
        <Head>
          <title>Courses - Craig Willey</title>
          <meta
              name="description"
              content="Recent courses I have taken on different online platforms."
          />
        </Head>
        <SimpleLayout
            title="Recent courses I have taken on different online platforms."
            intro="Here are some of the courses I've taken recently across different platforms like Coursera, LinkedIn Learning, Udemy, and Pluralsight. Feel free to check them out."
        >
          <ul
              role="list"
              className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {courses.map((course) => (
                <Card as="li" key={course.name}>
                  <div className="relative z-10 flex h-24 w-48 items-center justify-center bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                        src={course.image}
                        alt=""
                        className="h-24 w-48"
                        unoptimized
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    <Card.Link href={course.link.href}>{course.name}</Card.Link>
                  </h2>
                  <Card.Description>{course.description}</Card.Description>
                  <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                    <LinkIcon className="h-6 w-6 flex-none" />
                    <span className="ml-2">{course.link.label}</span>
                  </p>
                </Card>
            ))}
          </ul>
        </SimpleLayout>
      </>
  )
}

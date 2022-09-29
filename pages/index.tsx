import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Learn more about me, my projects, skills, and get in contact."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Project Task Management" overTitle="management">
            <p>
              Project management is the art of keeping a team coordinated and on-task in pursuit of a specific goal.{' '}
              Project managers need a unique skill set, including both managerial experience and hands-on industry knowledge.{' '}
              Time management and interpersonal skills are essential to this field, too.{' '}
              A project management resume should emphasize those abilities.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Incident Management Escalation" overTitle="escalation" reversed>
            <p>
              Escalation is not just about assigning an issue to another internal team or to a relevant third-party provider.{' '}
              It is about <strong>kickstarting</strong> the well-oiled machine that coordinates cross-team and cross-functional efforts in the most effective way possible.{' '}
              In many organizations, the escalation process leaves much to be desired, resulting in wasted time, resources, and unnecessary delays.{' '}
              Here are just a few common pitfalls:
            </p>
            <ul>
              <li><strong>Ad hoc decision making that results in delays</strong>: Leaving it up to the judgment call of the first responders to assign the issue to the proper department. This ad hoc approach often results in significant time-waste before the right people are notified.</li>
              <li><strong>Deficient multi-party orchestration</strong>: Sometimes the incident requires multiple parties to be involved, often in a very specific order. Orchestrating multiple parties is difficult, especially in high-pressure environments, as each party needs to be notified in alerts separately and updated accordingly.</li>
              <li><strong>Over-escalating</strong>: Wasting top-level engineers time with non-critical issues is a common problem. First responders end up assigning the incident to a higher level than necessary not because it is the correct thing to do, but because they don’t know who the correct person is to escalate to.</li>
              <li><strong>Notification is not action</strong>: Notification does not automatically translate into action; this is why there is a pressing need for an effective system that brings all parties on board quickly. The point isn’t just to notify, but to ensure that necessary actions are aligned.</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}

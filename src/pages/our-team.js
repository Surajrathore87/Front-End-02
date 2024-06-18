import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import { callPostAPI } from "_services/CallAPI";

const MetaData = dynamic(import('components/Common/MetaData'));
const Breadcrumb = dynamic(import('components/Common/Breadcrumb'));
const Team = dynamic(import('components/Aboutus/Team'));

export default function OurTeam(props) {
  const { teamData } = props;
  return (
    <>
      <MetaData metaContent={{
        metaTitle: 'Meet our team | Ashapurna Buildcon Limited',
        metaDescription: 'In Ashapurna Buildcon where the people behind a company are as important as the company itself, you are likely to find a kind of expanded about page that includes information on individual employees.',
        metaKeywords: 'Our Team, Ashapurna Team',
      }} />
      <Breadcrumb pageName={'Our Team'} pageHeading={'Our Team'} />
      {teamData && <Team teamData={teamData.data} />}
    </>
  )
}

export async function getServerSideProps() {
  const res = {
    teamData: null,
  };

  res.teamData = await callPostAPI(process.env.TEAM_API, {});

  return {
    props: res,
  };
}

OurTeam.propTypes = {
  teamData: PropTypes.object,
}
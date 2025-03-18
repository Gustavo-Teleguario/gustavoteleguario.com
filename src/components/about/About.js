import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";

export default function About() {
    const firstName = info.firstName.toLowerCase();

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                programming-languages/tools
            </p>
            <p><span style={{color: info.baseColor}}>languages/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>

            <table className={Style.skills}>
                <thead>
                <tr>
                    <th className={Style.columnHeader} style={{color: info.baseColor}}>Proficient With</th>
                    <th className={Style.columnHeader} style={{color: info.baseColor}}>Tools</th>
                    <th className={Style.columnHeader} style={{color: info.baseColor}}>Exposed To Learn</th>
                </tr>
                </thead>
                <tbody>
                {info.knowledge.map((entry, index) => (
                    <tr key={index}>
                        <td className={Style.column}>
                            <ul>
                                {entry.proficientWith.map((proficientWith, toolIndex) => (
                                    <li key={toolIndex}>{proficientWith}</li>
                                ))}
                            </ul>
                        </td>
                        <td className={Style.column}>
                            <ul>
                                {entry.tools.map((tools, exposeIndex) => (
                                    <li key={exposeIndex}>{tools}</li>
                                ))}
                            </ul>
                        </td>
                        <td className={Style.column}>
                            <ul>
                                {entry.exposedTo.map((exposeTo, exposeIndex) => (
                                    <li key={exposeIndex}>{exposeTo}</li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>

            <table className={Style.skills}>
                <thead>
                <tr>
                    <th className={Style.columnHeader} style={{color: info.baseColor}}>Hobbies</th>
                    <th className={Style.columnHeader} style={{color: info.baseColor}}>Skills</th>
                    <th className={Style.columnHeader} style={{color: info.baseColor}}>Interest</th>
                </tr>
                </thead>
                <tbody>
                {info.setOfSkills.map((entry, index) => (
                    <tr key={index}>
                        <td className={Style.column}>
                            <ul>
                                {entry.hobbies.map((hobbies, toolIndex) => (
                                    <li key={toolIndex}>{`${hobbies.emoji} ${hobbies.label}`}</li>
                                ))}
                            </ul>
                        </td>
                        <td className={Style.column}>
                            <ul>
                                {entry.skills.map((skill, exposeIndex) => (
                                    <li key={exposeIndex}>{`${skill.emoji} ${skill.label}`}</li>
                                ))}
                            </ul>
                        </td>
                        <td className={Style.column}>
                            <ul>
                                {entry.interest.map((interest, exposeIndex) => (
                                    <li key={exposeIndex}>{`${interest.emoji} ${interest.label}`}</li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    );
}
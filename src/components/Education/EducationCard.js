import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg';
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg';
import './Education.css';

function EducationCard({ id, course, startYear, endYear }) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        educationCard: {
            backgroundColor: theme.primary30,
            '&:hover': {
                backgroundColor: theme.primary50,
                transform: 'scale(1.03)',
            },
            transition: 'all 0.3s ease-in-out',
        },
    }));

    const classes = useStyles();

    return (
        <div key={id} className={`education-card ${classes.educationCard}`}>
            <div className="educard-img" style={{ backgroundColor: theme.primary }}>
                <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="certification badge" />
            </div>
            <div className="education-details">
                <h6 style={{ color: theme.primary }}>{startYear} – {endYear}</h6>
                <h4 style={{ color: theme.tertiary }}>{course}</h4>
            </div>
        </div>
    );
}

export default EducationCard;

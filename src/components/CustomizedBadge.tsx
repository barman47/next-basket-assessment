'use client';

import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: 'transparent',
        color: theme.palette.primary.main,
        right: -3,
        top: 13,
        padding: '0 4px',
    },
}));

interface Props {
    icon: React.ReactElement;
    count: number;
    size?: "small" | "medium" | "large"
    handleClick?:() => void
};

const CustomizedBadge: React.FC<Props> = ({ icon, count, size, handleClick }) => {
    return (
        <IconButton size={size ?? "small"} color="primary" onClick={handleClick ? handleClick : () => {}} aria-label="badge-button">
            <StyledBadge badgeContent={count} color="secondary">
                {icon}
            </StyledBadge>
        </IconButton>
    );
}

export default CustomizedBadge;
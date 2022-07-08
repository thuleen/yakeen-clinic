import Typography from '@mui/material/Typography';

interface PrimaryTextProps {
  value: string;
}

const SecondaryText = ({ value }: PrimaryTextProps) => {
  return (
    <Typography component="span" variant="body1">
      {value}
    </Typography>
  );
};

export default SecondaryText;

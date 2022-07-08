import Typography from "@mui/material/Typography";

interface PrimaryTextProps {
  label: string;
}

const PrimaryText = ({ label }: PrimaryTextProps) => {
  return (
    <Typography component="span" variant="caption" color="primary">
      {label}
    </Typography>
  );
};

export default PrimaryText;

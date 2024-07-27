import { Button} from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MetaInformationButtons() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <Button
          variant="outlined"
          startIcon={<AppsIcon />}
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "20px",
            textTransform: "none",
            height:"4vh",
            minWidth: "100px",
            border: "1px solid #ccc",
            '&:hover': {
              backgroundColor: "#f0f0f0",
              borderColor: "#bbb",
            },
          }}
        >
          Builder
        </Button>
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "20px",
            height:"4vh",
            textTransform: "none",
            minWidth: "100px",
            border: "1px solid #ccc",
            '&:hover': {
              backgroundColor: "#f0f0f0",
              borderColor: "#bbb",
            },
          }}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          startIcon={<VisibilityIcon />}
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "20px",
            height:"4vh",
            textTransform: "none",
            minWidth: "100px",
            border: "1px solid #ccc",
            '&:hover': {
              backgroundColor: "#f0f0f0",
              borderColor: "#bbb",
            },
          }}
        >
          Preview
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "20px",
            textTransform: "none",
            height:"4vh",
            minWidth: "100px",
            border: "1px solid #ccc",
            '&:hover': {
              backgroundColor: "#f0f0f0",
              borderColor: "#bbb",
            },
          }}
        >
          Delete
        </Button>
      </div>
    );
  }
  
import { Box, IconButton, Typography } from "@mui/material";
import React, { memo } from "react";

import { Handle } from "reactflow";


import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default memo(({ id, type, data }) => {
  return (
    <React.Fragment>
      <Box
        className="custom-drag-handle"
        style={{
          height: "27px",
          borderBottom: "2px solid",
          borderColor: "inherit",
          marginRight: "5px",
          marginLeft: "5px"
        }}
      >
        <Typography
          align="center"
        >
          Action
        </Typography>
      </Box>
      <Box padding={2} style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <IconButton
          variant={"contained"}
          style={{ background: "#2ecc71", color: 'white' }}
          size="small"
          onClick={() => {
            data.openConfig(id, type);
          }}
        >
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton
          variant={"contained"}
          style={{ background: "#e74c3c", color: 'white' }}
          size="small"
          onClick={() => {
            data.openDeleteNode(id);
          }}
        >
          <DeleteForeverIcon fontSize="small" />
        </IconButton>
      </Box>
      <Handle
        id={data.inputHandleId}
        type="target"
        position="left"
      />
      <div className="right_handles_wrapper">
        <Handle
          id={data.nextExtensionHandleId}
          position="right"
          style={{
            marginTop: "12px"
          }}
        />
      </div>
    </React.Fragment>
  );
});

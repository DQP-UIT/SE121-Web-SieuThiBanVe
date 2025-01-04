import React from "react";
import { Box, Typography, Paper, Avatar, IconButton } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";
import { blue } from "@mui/material/colors";

const UserTag = ({ user }) => {
  return (
    <div className="relative w-fit min-w-96 p-4 shadow-md">
      <Paper
        className="relative w-fit min-w-96 p-4 shadow-md"
        sx={{
          color: "white",
          backgroundBlendMode: "overlay",
          backgroundColor: blue[700],
        }}
      >
        <Box className="absolute -right-10 -top-8 z-50">
          <Avatar alt={user.fullName} src={user.avatarUrl} className="mr-2" sx={{ width: 62, height: 62 }}/>
        </Box>
        <Box className="grid grid-cols-2 gap-4">
          <Typography
            className="mb-2"
            color="black"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            }}
          >
            Thông tin kiến trúc sư
          </Typography>
          <IconButton
            sx={{ color: "white", width: "fit-content", marginBottom: 2 }}
            aria-label="edit profile"
          >
            <EditIcon />
          </IconButton>
        </Box>

        <Box className="grid grid-cols-2 gap-4">
          <Box className="flex items-center">
            <BadgeIcon className="mr-2 text-white" />
            <Box>
              <Typography variant="body2" className="text-white">
                ID
              </Typography>
              <Typography variant="body1" className="font-bold">
                {user.id}
              </Typography>
            </Box>
          </Box>
          <Box className="flex items-center">
            <PersonIcon className="mr-2 text-white" />
            <Box>
              <Typography variant="body2" className="text-white">
                Tên
              </Typography>
              <Typography variant="body1" className="font-bold">
                {user.fullName}
              </Typography>
            </Box>
          </Box>
          <Box className="flex items-center">
            <CalendarTodayIcon className="mr-2 text-white" />
            <Box>
              <Typography variant="body2" className="text-white">
                Ngày sinh
              </Typography>
              <Typography variant="body1" className="font-bold">
                {moment(user.dob).format("DD/MM/YYYY")}
              </Typography>
            </Box>
          </Box>
          {user.role === "admin" ? (
            <Box className="flex items-center">
              <InsertDriveFileIcon className="mr-2 text-white" />
              <Box>
                <Typography variant="body2" className="text-white">
                  Ngày kích hoạt
                </Typography>
                <Typography variant="body1" className="font-bold">
                  {moment(user.activedDay).format("DD/MM/YYYY")}
                </Typography>
              </Box>
            </Box>
          ) : (
            <Box className="flex items-center">
              <InsertDriveFileIcon className="mr-2 text-white" />
              <Box>
                <Typography variant="body2" className="text-white">
                  Số bản vẽ
                </Typography>
                <Typography variant="body1" className="font-bold">
                  {user.designs}
                </Typography>
              </Box>
            </Box>
          )}
          <Box className="flex items-center">
            <EmailIcon className="mr-2 text-white" />
            <Box>
              <Typography variant="body2" className="text-white">
                Email
              </Typography>
              <Typography variant="body1" className="font-bold">
                {user.email}
              </Typography>
            </Box>
          </Box>
          <Box className="flex items-center">
            <PhoneIcon className="mr-2 text-white" />
            <Box>
              <Typography variant="body2" className="text-white">
                Số điện thoại
              </Typography>
              <Typography variant="body1" className="font-bold">
                {user.phonenumber}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default UserTag;

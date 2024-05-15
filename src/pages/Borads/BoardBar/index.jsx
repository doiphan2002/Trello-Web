import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Button, Tooltip } from '@mui/material'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'

const MENU_STYLE = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }

}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label="DoiPhanDev MERN Stack Board"
          clickable />

        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable />

        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable />

        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable />

        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          clickable />

      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant='outlined' startIcon={<LibraryAddIcon />}>Invite</Button>
        <AvatarGroup
          max={7}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
        >
          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
              src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/416123341_3546985152210005_132999661123733663_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v2z-1VrMkooQ7kNvgHmKutN&_nc_oc=Adg_gvHKMqXfYBi5cajHLuDjewI_jxR6fvFOa29C70wn6fF5XBxXWqMpZGhWW4S0McZIfZbSuQqIjsFjSills2cb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYDIAOd-WrTYofA6klkWLMkdDSwKQN4HYl53K8ZrhHAsIA&oe=664A3EF5' />
          </Tooltip>

          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
              src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/416123341_3546985152210005_132999661123733663_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v2z-1VrMkooQ7kNvgHmKutN&_nc_oc=Adg_gvHKMqXfYBi5cajHLuDjewI_jxR6fvFOa29C70wn6fF5XBxXWqMpZGhWW4S0McZIfZbSuQqIjsFjSills2cb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYDIAOd-WrTYofA6klkWLMkdDSwKQN4HYl53K8ZrhHAsIA&oe=664A3EF5' />
          </Tooltip>

          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
              src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/416123341_3546985152210005_132999661123733663_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v2z-1VrMkooQ7kNvgHmKutN&_nc_oc=Adg_gvHKMqXfYBi5cajHLuDjewI_jxR6fvFOa29C70wn6fF5XBxXWqMpZGhWW4S0McZIfZbSuQqIjsFjSills2cb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYDIAOd-WrTYofA6klkWLMkdDSwKQN4HYl53K8ZrhHAsIA&oe=664A3EF5' />
          </Tooltip>

          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
              src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/416123341_3546985152210005_132999661123733663_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v2z-1VrMkooQ7kNvgHmKutN&_nc_oc=Adg_gvHKMqXfYBi5cajHLuDjewI_jxR6fvFOa29C70wn6fF5XBxXWqMpZGhWW4S0McZIfZbSuQqIjsFjSills2cb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYDIAOd-WrTYofA6klkWLMkdDSwKQN4HYl53K8ZrhHAsIA&oe=664A3EF5' />
          </Tooltip>

          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
              src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/416123341_3546985152210005_132999661123733663_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v2z-1VrMkooQ7kNvgHmKutN&_nc_oc=Adg_gvHKMqXfYBi5cajHLuDjewI_jxR6fvFOa29C70wn6fF5XBxXWqMpZGhWW4S0McZIfZbSuQqIjsFjSills2cb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYDIAOd-WrTYofA6klkWLMkdDSwKQN4HYl53K8ZrhHAsIA&oe=664A3EF5' />
          </Tooltip>

          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
              src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/416123341_3546985152210005_132999661123733663_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v2z-1VrMkooQ7kNvgHmKutN&_nc_oc=Adg_gvHKMqXfYBi5cajHLuDjewI_jxR6fvFOa29C70wn6fF5XBxXWqMpZGhWW4S0McZIfZbSuQqIjsFjSills2cb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYDIAOd-WrTYofA6klkWLMkdDSwKQN4HYl53K8ZrhHAsIA&oe=664A3EF5' />
          </Tooltip>

          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
              src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/416123341_3546985152210005_132999661123733663_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v2z-1VrMkooQ7kNvgHmKutN&_nc_oc=Adg_gvHKMqXfYBi5cajHLuDjewI_jxR6fvFOa29C70wn6fF5XBxXWqMpZGhWW4S0McZIfZbSuQqIjsFjSills2cb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYDIAOd-WrTYofA6klkWLMkdDSwKQN4HYl53K8ZrhHAsIA&oe=664A3EF5' />
          </Tooltip>

          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
              src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/416123341_3546985152210005_132999661123733663_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v2z-1VrMkooQ7kNvgHmKutN&_nc_oc=Adg_gvHKMqXfYBi5cajHLuDjewI_jxR6fvFOa29C70wn6fF5XBxXWqMpZGhWW4S0McZIfZbSuQqIjsFjSills2cb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYDIAOd-WrTYofA6klkWLMkdDSwKQN4HYl53K8ZrhHAsIA&oe=664A3EF5' />
          </Tooltip>

          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
              src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/416123341_3546985152210005_132999661123733663_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v2z-1VrMkooQ7kNvgHmKutN&_nc_oc=Adg_gvHKMqXfYBi5cajHLuDjewI_jxR6fvFOa29C70wn6fF5XBxXWqMpZGhWW4S0McZIfZbSuQqIjsFjSills2cb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYDIAOd-WrTYofA6klkWLMkdDSwKQN4HYl53K8ZrhHAsIA&oe=664A3EF5' />
          </Tooltip>
        </AvatarGroup>

      </Box>
    </Box>
  )
}

export default BoardBar

import {
    GatewayIntentBits,
    IntentsBitField,
    ActivityFlags,
    ActivityType,
    PermissionsBitField,
    Events,
} from "discord.js";

enum ButtonStyleOptions {
    Primary = 1,
    Secondary = 2,
    Success = 3,
    Danger = 4,
    Link = 5,
}

enum CacheOptions {
    Guilds = "GuildManager",
    Messages = "MessageManager",
    Channels = "ChannelManager",
    Users = "UserManager",
    ApplicationCommands = "ApplicationCommandManager",
    ApplicationCommandPermissions = "ApplicationCommandPermissionManager",
    PermissionOverwrites = "PermissionOverwritesManager",
    Presences = "PersenceManager",
    Reactions = "ReactionManager",
    ReactionUsers = "ReactionUserManager",
    Roles = "RoleManager",
    StageInstances = "StageInstanceManager",
    Threads = "ThreadManager",
    ThreadMembers = "ThreadMemberManager",
    VoiceStates = "VoiceStateManager",
    GuildApplicationCommand = "GuildApplicationCommandManager",
    GuildBans = "GuildBanManager",
    GuildChannels = "GuildChannelManager",
    GuildEmojis = "GuildEmojiManager",
    GuildEmojiRoles = "GuildEmojiRoleManager",
    GuildInvites = "GuildInviteManager",
    GuildMembers = "GuildMemberManager",
    GuildMemberRoles = "GuildMemberRoleManager",
    GuildStickers = "GuildStickerManager",
}

enum SlashOptionTypes {
    SubCommand = 1,
    SubGroup = 2,
    String = 3,
    Integer = 4,
    Boolean = 5,
    User = 6,
    Channel = 7,
    Role = 8,
    Mentionable = 9,
    Number = 10,
}

export type Users = {
    ok: boolean;
    members: Members[];
    cache_ts: number;
    response_metadata: {
        next_cursor: string
    }
}

export type Members = {
    id: string;
    team_id: string;
    name: string;
    deleted: boolean;
    color: string;
    real_name: string;
    tz: string;
    tz_label: string;
    tz_offset: number;
    profile: {
        title: string;
        phone: string;
        skype: string;
        real_name: string;
        real_name_normalized: string;
        display_name: string;
        display_name_normalized: string;
        fields: any;
        status_text: string;
        status_emoji: string;
        status_emoji_display_info: [];
        status_expiration: number;
        avatar_hash: string;
        always_active: boolean;
        first_name: string;
        last_name: string;
        image_24: string;
        image_32: string;
        image_48: string;
        image_72: string;
        image_192: string;
        image_512: string;
        status_text_canonical: string;
        team: string;
    }
    is_admin?: boolean;
    is_owner?: boolean;
    is_primary_owner?: boolean;
    is_restricted?: boolean;
    is_ultra_restricted?: boolean;
    is_bot?: boolean;
    is_app_user?: boolean;
    updated?: number;
    is_email_confirmed?: boolean;
    who_can_share_contact_card?: string
}
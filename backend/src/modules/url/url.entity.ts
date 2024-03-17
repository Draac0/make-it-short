import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { BaseEntity } from '@/common/base-entity';
import { UserEntity } from '@/modules/users/user.entity';

@Entity('url')
export class UrlEntity extends BaseEntity {
	@Column({ type: 'text', name: 'original_url', nullable: false })
	originalUrl: string;

	@Column({ type: 'text', name: 'short_url', nullable: false, unique: true })
	@Index('short_url_index', { unique: true })
	shortUrl: string;

	@ManyToOne(() => UserEntity, (user) => user.urls, {
		nullable: true,
		onDelete: 'SET NULL',
	})
	user?: UserEntity;

	@Column({ type: 'timestamp', name: 'expiry_date', nullable: true })
	expiryDate?: Date;

	@Column({
		type: 'integer',
		name: 'total_clicks',
		default: 0,
		nullable: false,
	})
	totalClicks: number;

	@Column({ type: 'timestamp', name: 'last_clicked_at', nullable: true })
	lastClickedAt?: Date;

	@Column({ type: 'text', name: 'last_clicked_ip', nullable: true })
	lastClickedIp?: string;

	@Column({ type: 'text', name: 'last_clicked_device', nullable: true })
	lastClickedDevice?: string;

	@Column({ type: 'text', name: 'last_clicked_browser', nullable: true })
	lastClickedBrowser?: string;

	@Column({ type: 'text', name: 'last_clicked_os', nullable: true })
	lastClickedOs?: string;
}

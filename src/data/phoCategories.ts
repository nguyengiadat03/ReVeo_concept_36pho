export interface PhoCategory {
    id: number;
    name: string;
    description: string;
    icon: string;
}

export const phoCategories: PhoCategory[] = [
    {
        id: 1,
        name: 'Phố Thời Trang',
        description: 'Quần áo, giày dép, phụ kiện thời trang nam nữ',
        icon: '👗',
    },
    {
        id: 2,
        name: 'Phố Mỹ Phẩm',
        description: 'Skincare, makeup, chăm sóc da chuyên nghiệp',
        icon: '💄',
    },
    {
        id: 3,
        name: 'Phố Điện Tử',
        description: 'Điện thoại, laptop, phụ kiện công nghệ',
        icon: '📱',
    },
    {
        id: 4,
        name: 'Phố Gia Dụng',
        description: 'Đồ dùng nhà bếp, nội thất, trang trí',
        icon: '🏠',
    },
    {
        id: 5,
        name: 'Phố Mẹ & Bé',
        description: 'Đồ cho mẹ bầu, em bé, đồ chơi trẻ em',
        icon: '👶',
    },
    {
        id: 6,
        name: 'Phố Thực Phẩm',
        description: 'Thực phẩm tươi sống, đồ ăn vặt, đặc sản',
        icon: '🍜',
    },
    {
        id: 7,
        name: 'Phố Thể Thao',
        description: 'Dụng cụ tập gym, quần áo thể thao, giày chạy',
        icon: '⚽',
    },
    {
        id: 8,
        name: 'Phố Sách Vở',
        description: 'Sách, văn phòng phẩm, dụng cụ học tập',
        icon: '📚',
    },
    {
        id: 9,
        name: 'Phố Sức Khỏe',
        description: 'Thực phẩm chức năng, thuốc, thiết bị y tế',
        icon: '💊',
    },
    {
        id: 10,
        name: 'Phố Thú Cưng',
        description: 'Đồ dùng cho chó mèo, thức ăn, phụ kiện',
        icon: '🐾',
    },
    {
        id: 11,
        name: 'Phố Nội Thất',
        description: 'Bàn ghế, tủ kệ, giường ngủ, sofa',
        icon: '🛋️',
    },
    {
        id: 12,
        name: 'Phố Đồng Hồ',
        description: 'Đồng hồ nam nữ, smartwatch, phụ kiện',
        icon: '⌚',
    },
    {
        id: 13,
        name: 'Phố Túi Xách',
        description: 'Balo, túi xách, ví da, cặp công sở',
        icon: '👜',
    },
    {
        id: 14,
        name: 'Phố Kính Mắt',
        description: 'Kính cận, kính râm, gọng kính thời trang',
        icon: '👓',
    },
    {
        id: 15,
        name: 'Phố Trang Sức',
        description: 'Nhẫn, dây chuyền, bông tai, vòng tay',
        icon: '💍',
    },
    {
        id: 16,
        name: 'Phố Giày Dép',
        description: 'Giày thể thao, sandal, boot, dép',
        icon: '👟',
    },
    {
        id: 17,
        name: 'Phố Đồ Chơi',
        description: 'Đồ chơi trẻ em, mô hình, board game',
        icon: '🧸',
    },
    {
        id: 18,
        name: 'Phố Xe Cộ',
        description: 'Phụ kiện ô tô, xe máy, đồ chơi xe',
        icon: '🚗',
    },
    {
        id: 19,
        name: 'Phố Làm Đẹp',
        description: 'Spa, nail, tóc, dịch vụ làm đẹp',
        icon: '💅',
    },
    {
        id: 20,
        name: 'Phố Điện Lạnh',
        description: 'Tủ lạnh, máy giặt, điều hòa, quạt',
        icon: '❄️',
    },
    {
        id: 21,
        name: 'Phố Nấu Ăn',
        description: 'Nồi, chảo, dao, dụng cụ nhà bếp',
        icon: '🍳',
    },
    {
        id: 22,
        name: 'Phố Cây Cảnh',
        description: 'Cây xanh, hoa, chậu cảnh, phân bón',
        icon: '🌱',
    },
    {
        id: 23,
        name: 'Phố Nhạc Cụ',
        description: 'Guitar, piano, trống, phụ kiện âm nhạc',
        icon: '🎸',
    },
    {
        id: 24,
        name: 'Phố Du Lịch',
        description: 'Vali, balo du lịch, phụ kiện travel',
        icon: '✈️',
    },
    {
        id: 25,
        name: 'Phố Cà Phê',
        description: 'Máy pha cà phê, hạt cà phê, phụ kiện',
        icon: '☕',
    },
    {
        id: 26,
        name: 'Phố Rượu Vang',
        description: 'Rượu vang, bia, đồ uống có cồn',
        icon: '🍷',
    },
    {
        id: 27,
        name: 'Phố Bánh Kẹo',
        description: 'Bánh ngọt, kẹo, chocolate, snack',
        icon: '🍰',
    },
    {
        id: 28,
        name: 'Phố Hải Sản',
        description: 'Cá, tôm, cua, đồ biển tươi sống',
        icon: '🦞',
    },
    {
        id: 29,
        name: 'Phố Trái Cây',
        description: 'Hoa quả tươi, trái cây nhập khẩu',
        icon: '🍎',
    },
    {
        id: 30,
        name: 'Phố Hoa Tươi',
        description: 'Hoa cưới, hoa sinh nhật, hoa trang trí',
        icon: '🌸',
    },
    {
        id: 31,
        name: 'Phố Handmade',
        description: 'Đồ thủ công, quà tặng handmade',
        icon: '🎨',
    },
    {
        id: 32,
        name: 'Phố Văn Hóa',
        description: 'Tranh, tượng, đồ lưu niệm văn hóa',
        icon: '🖼️',
    },
    {
        id: 33,
        name: 'Phố Giặt Ủi',
        description: 'Dịch vụ giặt là, ủi đồ, giặt hấp',
        icon: '👔',
    },
    {
        id: 34,
        name: 'Phố Sửa Chữa',
        description: 'Sửa điện thoại, laptop, đồ điện tử',
        icon: '🔧',
    },
    {
        id: 35,
        name: 'Phố Cho Thuê',
        description: 'Cho thuê đồ, thiết bị, dịch vụ',
        icon: '🏷️',
    },
    {
        id: 36,
        name: 'Phố Khác',
        description: 'Các sản phẩm & dịch vụ đa dạng khác',
        icon: '🎁',
    },
];

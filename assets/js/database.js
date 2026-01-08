// ====================================
// PHARMACY PRO - JSON DATABASE
// ====================================

window.DB = {
    // 1. THUỐC
    thuoc: [
        {
            id: 1,
            maThuoc: "TH001",
            tenThuoc: "Panadol Extra",
            hoatChat: "Paracetamol 500mg + Caffeine 65mg",
            nhomThuoc: "Giảm đau - Hạ sốt",
            donViTinh: "Viên",
            dongGoi: "Hộp 100 viên",
            soLo: "L001-23",
            hanSuDung: "2024-06-15",
            tonKho: 120,
            dinhmucToiThieu: 50,
            giaNhap: 1500,
            giaBan: 2000,
            anhThuoc: "https://example.com/panadol.jpg",
            nhaCungCapId: 1,
            trangThai: "active",
            createdAt: "2023-01-15T10:00:00Z"
        },
        {
            id: 2,
            maThuoc: "TH002",
            tenThuoc: "Siro Ho Prospan",
            hoatChat: "Cao khô lá thường xuân",
            nhomThuoc: "Hô hấp",
            donViTinh: "Chai",
            dongGoi: "Chai 100ml",
            soLo: "B12-25",
            hanSuDung: "2025-09-30",
            tonKho: 15,
            dinhmucToiThieu: 20,
            giaNhap: 100000,
            giaBan: 120000,
            nhaCungCapId: 2,
            trangThai: "active",
            createdAt: "2023-02-10T14:30:00Z"
        },
        {
            id: 3,
            maThuoc: "TH003",
            tenThuoc: "Efferalgan Sủi 500mg",
            hoatChat: "Paracetamol 500mg",
            nhomThuoc: "Giảm đau - Hạ sốt",
            donViTinh: "Viên",
            dongGoi: "Vỉ 4 viên",
            soLo: "EFF-2024",
            hanSuDung: "2025-06-01",
            tonKho: 50,
            dinhmucToiThieu: 30,
            giaNhap: 3000,
            giaBan: 3500,
            nhaCungCapId: 1,
            trangThai: "active",
            createdAt: "2023-03-20T09:15:00Z"
        },
        {
            id: 4,
            maThuoc: "TH004",
            tenThuoc: "Berberin Mộc Hương",
            hoatChat: "Berberin 10mg",
            nhomThuoc: "Tiêu hóa",
            donViTinh: "Viên",
            dongGoi: "Lọ 100 viên",
            soLo: "B992-01",
            hanSuDung: "2026-01-15",
            tonKho: 300,
            dinhmucToiThieu: 100,
            giaNhap: 300,
            giaBan: 500,
            nhaCungCapId: 3,
            trangThai: "active",
            createdAt: "2023-01-05T11:00:00Z"
        },
        {
            id: 5,
            maThuoc: "TH005",
            tenThuoc: "Khẩu trang y tế 4 lớp",
            hoatChat: "N/A",
            nhomThuoc: "Dụng cụ y tế",
            donViTinh: "Hộp",
            dongGoi: "Hộp 50 cái",
            soLo: "KT-2023",
            hanSuDung: null,
            tonKho: 1000,
            dinhmucToiThieu: 200,
            giaNhap: 30000,
            giaBan: 35000,
            nhaCungCapId: 4,
            trangThai: "active",
            createdAt: "2023-04-01T08:00:00Z"
        },
        {
            id: 6,
            maThuoc: "TH006",
            tenThuoc: "Vitamin C 500mg",
            hoatChat: "Acid Ascorbic 500mg",
            nhomThuoc: "Vitamin & Khoáng chất",
            donViTinh: "Lọ",
            dongGoi: "Lọ 100 viên",
            soLo: "VTC-2024",
            hanSuDung: "2024-05-20",
            tonKho: 20,
            dinhmucToiThieu: 50,
            giaNhap: 65000,
            giaBan: 80000,
            nhaCungCapId: 2,
            trangThai: "active",
            createdAt: "2023-02-14T13:00:00Z"
        }
    ],

    // 2. NHÀ CUNG CẤP
    nhaCungCap: [
        {
            id: 1,
            maNCC: "NCC-001",
            tenNCC: "Vimedimex",
            nguoiLienHe: "Dược sĩ Lan",
            soDienThoai: "028 3839 9999",
            email: "contact@vimedimex.com",
            diaChi: "246 Cống Quỳnh, P. Phạm Ngũ Lão, Quận 1, TP. Hồ Chí Minh",
            maSoThue: "0301234567",
            nhomNCC: "Dược phẩm",
            congNo: 25000000,
            trangThai: "active",
            createdAt: "2023-01-01T00:00:00Z"
        },
        {
            id: 2,
            maNCC: "NCC-002",
            tenNCC: "Zuellig Pharma",
            nguoiLienHe: "Mr. John Smith",
            soDienThoai: "0251 3936 666",
            email: "info@zuellig.com",
            diaChi: "Khu CN Amata, P. Long Bình, TP. Biên Hòa, Đồng Nai",
            maSoThue: "0301567890",
            nhomNCC: "Đa ngành",
            congNo: 0,
            trangThai: "active",
            createdAt: "2023-01-15T00:00:00Z"
        },
        {
            id: 3,
            maNCC: "NCC-003",
            tenNCC: "CPC1 Hà Nội",
            nguoiLienHe: "Nguyễn Thị B",
            soDienThoai: "024 3845 4567",
            email: "sales@cpc1hn.com.vn",
            diaChi: "356A Giải Phóng, P. Phương Liệt, Q. Thanh Xuân, Hà Nội",
            maSoThue: "0102345678",
            nhomNCC: "Thiết bị y tế",
            congNo: 12450000,
            trangThai: "inactive",
            createdAt: "2023-02-01T00:00:00Z"
        },
        {
            id: 4,
            maNCC: "NCC-004",
            tenNCC: "Gigamed",
            nguoiLienHe: "Trần Văn C",
            soDienThoai: "028 3512 8888",
            email: "support@gigamed.vn",
            diaChi: "Tòa nhà Etown 2, 364 Cộng Hòa, Tân Bình, HCM",
            maSoThue: "0303456789",
            nhomNCC: "Thiết bị",
            congNo: 0,
            trangThai: "active",
            createdAt: "2023-03-10T00:00:00Z"
        }
    ],

    // 3. KHÁCH HÀNG
    khachHang: [
        {
            id: 1,
            maKH: "KH001",
            tenKH: "Nguyễn Văn An",
            soDienThoai: "0909 123 456",
            email: "an.nguyen@example.com",
            diaChi: "123 Đường Lê Lợi, Phường Bến Thành, Quận 1, TP.HCM",
            ngaySinh: "1985-05-15",
            gioiTinh: "Nam",
            nhomKH: "VIP",
            diemTichLuy: 1250,
            hangKH: "Vàng",
            diUng: null,
            ghiChu: null,
            trangThai: "active",
            createdAt: "2023-01-10T00:00:00Z"
        },
        {
            id: 2,
            maKH: "KH002",
            tenKH: "Trần Thị Bích",
            soDienThoai: "0918 555 789",
            email: "bich.tran@gmail.com",
            diaChi: "45 Nguyễn Trãi, Q.5, TP.HCM",
            ngaySinh: "1990-08-20",
            gioiTinh: "Nữ",
            nhomKH: "Thường",
            diemTichLuy: 340,
            hangKH: "Bạc",
            diUng: "Penicillin",
            ghiChu: "Dị ứng Penicillin",
            trangThai: "active",
            createdAt: "2023-02-05T00:00:00Z"
        },
        {
            id: 3,
            maKH: "KH003",
            tenKH: "Lê Hoàng",
            soDienThoai: "0933 888 999",
            email: null,
            diaChi: "88 Võ Văn Kiệt, Q.1, TP.HCM",
            ngaySinh: "1995-12-10",
            gioiTinh: "Nam",
            nhomKH: "Vãng lai",
            diemTichLuy: 50,
            hangKH: "Thành viên mới",
            diUng: null,
            ghiChu: null,
            trangThai: "active",
            createdAt: "2023-10-01T00:00:00Z"
        }
    ],

    // 4. NHÂN VIÊN
    nhanVien: [
        {
            id: 1,
            maNV: "NV001",
            tenNV: "Nguyễn Văn A",
            chucVu: "Admin",
            soDienThoai: "0901 234 567",
            email: "admin@pharmacy.vn",
            ngaySinh: "1980-01-15",
            gioiTinh: "Nam",
            diaChi: "123 ABC, Q.1, TP.HCM",
            ngayVaoLam: "2020-01-01",
            luongCoBan: 15000000,
            trangThai: "active",
            username: "admin",
            password: "admin123",
            quyen: "admin"
        },
        {
            id: 2,
            maNV: "NV002",
            tenNV: "Trần Thị B",
            chucVu: "Dược sĩ",
            soDienThoai: "0902 345 678",
            email: "duocsi@pharmacy.vn",
            ngaySinh: "1992-05-20",
            gioiTinh: "Nữ",
            diaChi: "456 DEF, Q.3, TP.HCM",
            ngayVaoLam: "2021-06-15",
            luongCoBan: 12000000,
            trangThai: "active",
            username: "duocsi",
            password: "duocsi123",
            quyen: "staff"
        }
    ],

    // 5. ĐƠN VỊ TÍNH
    donViTinh: [
        { id: 1, maDVT: "DVT001", tenDVT: "Viên", moTa: "Đơn vị nhỏ nhất, dùng cho thuốc viên", trangThai: "active" },
        { id: 2, maDVT: "DVT002", tenDVT: "Vỉ", moTa: "Thường chứa 10-15 viên", trangThai: "active" },
        { id: 3, maDVT: "DVT003", tenDVT: "Hộp", moTa: "Đơn vị đóng gói bán lẻ hoặc nhập kho", trangThai: "active" },
        { id: 4, maDVT: "DVT004", tenDVT: "Chai", moTa: "Dùng cho thuốc nước, siro", trangThai: "active" },
        { id: 5, maDVT: "DVT005", tenDVT: "Gói", moTa: "Thuốc bột pha", trangThai: "inactive" },
        { id: 6, maDVT: "DVT006", tenDVT: "Lọ", moTa: "Dùng cho vitamin, viên nang", trangThai: "active" },
        { id: 7, maDVT: "DVT007", tenDVT: "Ống", moTa: "Dùng cho thuốc tiêm, kem bôi", trangThai: "active" }
    ],

    // 6. HÓA ĐƠN BÁN LẺ
    hoaDonBanLe: [
        {
            id: 1,
            maHD: "HD0001",
            ngayBan: "2026-01-08T10:30:00Z",
            khachHangId: 1,
            nhanVienId: 2,
            tongTien: 250000,
            giamGia: 0,
            thanhToan: 250000,
            phuongThucTT: "Tiền mặt",
            trangThai: "completed",
            ghiChu: null,
            chiTiet: [
                { thuocId: 1, soLuong: 20, donGia: 2000, thanhTien: 40000 },
                { thuocId: 2, soLuong: 1, donGia: 120000, thanhTien: 120000 },
                { thuocId: 5, soLuong: 2, donGia: 35000, thanhTien: 70000 }
            ]
        },
        {
            id: 2,
            maHD: "HD0002",
            ngayBan: "2026-01-08T14:15:00Z",
            khachHangId: 2,
            nhanVienId: 2,
            tongTien: 150000,
            giamGia: 10000,
            thanhToan: 140000,
            phuongThucTT: "Chuyển khoản",
            trangThai: "completed",
            ghiChu: "Khách hàng thân thiết",
            chiTiet: [
                { thuocId: 3, soLuong: 40, donGia: 3500, thanhTien: 140000 }
            ]
        }
    ],

    // 7. HÓA ĐƠN NHẬP HÀNG
    hoaDonNhapHang: [
        {
            id: 1,
            maPN: "PN0001",
            ngayNhap: "2026-01-05T09:00:00Z",
            nhaCungCapId: 1,
            nhanVienId: 1,
            tongTien: 50000000,
            trangThaiThanhToan: "paid",
            trangThai: "completed",
            ghiChu: "Nhập hàng tháng 1",
            chiTiet: [
                { thuocId: 1, soLuong: 1000, donGia: 1500, thanhTien: 1500000, soLo: "L001-23", hanSuDung: "2024-06-15" },
                { thuocId: 2, soLuong: 100, donGia: 100000, thanhTien: 10000000, soLo: "B12-25", hanSuDung: "2025-09-30" }
            ]
        }
    ],

    // 8. THÔNG TIN HIỆU THUỐC
    thongTinHieuThuoc: {
        tenHieuThuoc: "Nhà thuốc Pharmacy Pro",
        diaChi: "123 Đường ABC, Phường XYZ, Quận 1, TP.HCM",
        soDienThoai: "028 1234 5678",
        email: "contact@pharmacypro.vn",
        website: "www.pharmacypro.vn",
        soGPKD: "0123456789",
        nguoiDaiDien: "Dược sĩ Nguyễn Văn A",
        soGPHD: "GPP-123456",
        logo: null,
        slogan: "Chăm sóc sức khỏe - Tận tâm phục vụ"
    }
};

// Database Helper Functions
window.DBHelper = {
    // GET
    getThuocById: (id) => window.DB.thuoc.find(t => t.id === id),
    getKhachHangById: (id) => window.DB.khachHang.find(k => k.id === id),
    getNhaCungCapById: (id) => window.DB.nhaCungCap.find(n => n.id === id),
    
    // SEARCH
    searchThuoc: (keyword) => window.DB.thuoc.filter(t => 
        t.tenThuoc.toLowerCase().includes(keyword.toLowerCase()) ||
        t.hoatChat.toLowerCase().includes(keyword.toLowerCase()) ||
        t.maThuoc.toLowerCase().includes(keyword.toLowerCase())
    ),
    
    // ADD
    addThuoc: (thuoc) => {
        const newId = Math.max(...window.DB.thuoc.map(t => t.id)) + 1;
        const newThuoc = { ...thuoc, id: newId, createdAt: new Date().toISOString() };
        window.DB.thuoc.push(newThuoc);
        return newThuoc;
    },
    
    // UPDATE
    updateThuoc: (id, data) => {
        const index = window.DB.thuoc.findIndex(t => t.id === id);
        if (index !== -1) {
            window.DB.thuoc[index] = { ...window.DB.thuoc[index], ...data };
            return window.DB.thuoc[index];
        }
        return null;
    },
    
    // DELETE
    deleteThuoc: (id) => {
        const index = window.DB.thuoc.findIndex(t => t.id === id);
        if (index !== -1) {
            window.DB.thuoc.splice(index, 1);
            return true;
        }
        return false;
    },
    
    // SAVE TO LOCALSTORAGE (Optional)
    saveToLocalStorage: () => {
        localStorage.setItem('pharmacyDB', JSON.stringify(window.DB));
    },
    
    // LOAD FROM LOCALSTORAGE (Optional)
    loadFromLocalStorage: () => {
        const saved = localStorage.getItem('pharmacyDB');
        if (saved) {
            window.DB = JSON.parse(saved);
        }
    }
};

console.log('✅ Database loaded successfully!');
console.log('📊 Total medicines:', window.DB.thuoc.length);
console.log('🏥 Total suppliers:', window.DB.nhaCungCap.length);
console.log('👥 Total customers:', window.DB.khachHang.length);
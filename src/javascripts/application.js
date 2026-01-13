// Picture Portal Theme JavaScript
import { Application } from "@hotwired/stimulus";
import Alpine from "alpinejs";
import tooltip from "./alpinejs/directives/tooltip";

// Import controllers
import ImagePreviewController from "./controllers/image_preview_controller"
import ViewToggleController from "./controllers/view_toggle_controller"
import BatchDownloadController from "./controllers/batch_download_controller"
import FilterSelectController from "./controllers/filter_select_controller"
import FileSizeFilterController from "./controllers/file_size_filter_controller"
import SidebarToggleController from "./controllers/sidebar_toggle_controller"
import ImageZoomController from "./controllers/image_zoom_controller"
import ViewModeToggleController from "./controllers/view_mode_toggle_controller"
import SortOptionsController from "./controllers/sort_options_controller"
import MoreMenuController from "./controllers/more_menu_controller"
import UserMenuController from "./controllers/user_menu_controller"
import RedirectController from "./controllers/redirect_controller"
import TurboNavTreeController from "./controllers/turbo_nav_tree_controller"
import BreadcrumbController from "./controllers/breadcrumb_controller"
import LinkTargetController from "./controllers/link_target_controller"
import ImagesViewerController from "./controllers/images_viewer_controller"

// Import utils
import { buildUrl, updateQuery, getQueryParams, getFilenameWithExtension } from "./utils/index"

const application = Application.start();

// Register controllers
application.register("image-preview", ImagePreviewController)
application.register("view-toggle", ViewToggleController)
application.register("batch-download", BatchDownloadController)
application.register("filter-select", FilterSelectController)
application.register("file-size-filter", FileSizeFilterController)
application.register("sidebar-toggle", SidebarToggleController)
application.register("image-zoom", ImageZoomController)
application.register("view-mode-toggle", ViewModeToggleController)
application.register("sort-options", SortOptionsController)
application.register("more-menu", MoreMenuController)
application.register("user-menu", UserMenuController)
application.register("redirect", RedirectController)
application.register("turbo-nav-tree", TurboNavTreeController)
application.register("breadcrumb", BreadcrumbController)
application.register("link-target", LinkTargetController)
application.register("images-viewer", ImagesViewerController)

Alpine.magic("buildUrl", () => buildUrl);
Alpine.magic("updateQuery", () => updateQuery);
Alpine.magic("getQueryParams", () => getQueryParams);
Alpine.magic("getFilenameWithExtension", () => getFilenameWithExtension);
Alpine.directive("tooltip", tooltip);
window.Alpine = Alpine;
Alpine.start();

export default application;


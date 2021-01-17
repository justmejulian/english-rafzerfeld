import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import IndexPagePreview from "./preview-templates/IndexPagePreview";
import FeesPagePreview from "./preview-templates/FeesPagePreview";
import TeamPagePreview from "./preview-templates/TeamPagePreview";
import CoursesPagePreview from "./preview-templates/CoursesPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("fees", FeesPagePreview);
CMS.registerPreviewTemplate("team", TeamPagePreview);
CMS.registerPreviewTemplate("courses", CoursesPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
